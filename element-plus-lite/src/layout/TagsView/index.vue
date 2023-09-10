<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        class="tags-view-item"
        @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
        @contextmenu.prevent.native="openMenu(tag, $event)"
      >
        <span>{{ generateTitle(tag.title) }}</span>
        <!-- <i-ep-circle-close
          v-if="!isAffix(tag) && visitedViews.length > 1"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        /> -->
        <el-icon
          v-if="!isAffix(tag) && visitedViews.length > 1"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
          ><CircleClose
        /></el-icon>
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">Refresh</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags(selectedTag)">Close All</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import path from 'path'
import { useMainStore, tagviewStore } from '@/store/index'
import ScrollPane from './ScrollPane.vue'

export default {
  components: { ScrollPane },
  data() {
    return {
      scrollPane: null,

      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    }
  },
  computed: {
    visitedViews() {
      return tagviewStore().visitedViews
    },
    routes() {
      return useMainStore().routes
    }
  },
  watch: {
    $route() {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  methods: {
    generateTitle(title: any) {
      const { t } = useI18n()
      return t('route.' + title)
    },
    isActive(route: any) {
      return route.path === this.$route.path
    },
    isAffix(tag: any) {
      return tag.meta && tag.meta.affix
    },
    filterAffixTags(routes: any, basePath = '/') {
      let tags: any = []
      routes.forEach((route: any) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes))
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          tagviewStore().addVisitedView(tag)
        }
      }
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        tagviewStore().addView(this.$route)
      }
      return false
    },
    moveToCurrentTag() {
      const tags: any = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            if (tag.to.fullPath !== this.$route.fullPath) {
              tagviewStore().updateVisitedView(this.$route)
            }
            break
          }
        }
      })
    },
    refreshSelectedTag(view) {
      tagviewStore()
        .delCachedView(view)
        .then(() => {
          const { fullPath } = view
          this.$nextTick(() => {
            this.$router.replace({
              path: '/redirect' + fullPath
            })
          })
        })
    },
    closeSelectedTag(view) {
      tagviewStore()
        .delView(view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view)
          }
        })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag)
      tagviewStore()
        .delOthersViews(this.selectedTag)
        .then(() => {
          this.moveToCurrentTag()
        })
    },
    closeAllTags(view) {
      tagviewStore()
        .delAllViews(view)
        .then(({ visitedViews }) => {
          if (this.affixTags.some((tag) => tag.path === view.path)) {
            return
          }
          this.toLastView(visitedViews, view)
        })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    openMenu(tag: any, e: any) {
      const menuMinWidth = 105

      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = 34
      // e.clientY;
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    },
    handleScroll() {
      this.closeMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/basic.scss';
.tags-view-container {
  box-sizing: border-box;
  padding: 0 5px;
  width: 100%;
  height: 34px;
  border-bottom: 1px solid $layout-line;
  background: $layout-bg;

  .tags-view-wrapper {
    .tags-view-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-left: 5px;
      padding: 3px 8px;
      border: 1px solid #d8dce5;
      background: #fff;
      color: #495060;
      font-size: 12px;
      cursor: pointer;
      &:first-of-type {
        margin-left: 0;
      }
      &.active {
        border-color: var(--el-color-primary) !important;
        background-color: var(--el-color-primary) !important;
        color: #fff;
      }
    }
  }
  .contextmenu {
    position: absolute;
    z-index: 3000;
    margin: 0;
    padding: 5px 0;
    border-radius: 4px;
    background: #fff;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    color: #333;
    list-style-type: none;
    font-weight: 400;
    font-size: 12px;
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      vertical-align: 2px;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        display: inline-block;
        vertical-align: -3px;
        transform: scale(0.6);
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
