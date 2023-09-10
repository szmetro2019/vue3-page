<template>
  <template v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <!-- <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)"> -->
      <template v-if="onlyOneChild.meta">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <IconItem
            v-if="item.meta && item.meta.icon"
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
          ></IconItem>
          <template #title>
            <span>{{ generateTitle(onlyOneChild.meta.title) }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- </app-link> -->
    </template>
    <el-sub-menu v-else :popper-offset="2" :index="resolvePath(item.path)">
      <template #title>
        <IconItem v-if="item.meta" :icon="item.meta.icon"></IconItem>
        <span>{{ generateTitle(item.meta.title) }}</span>
      </template>
      <SiderbarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { isExternal } from '@/utils/index'
// import AppLink from "./AppLink.vue";
import IconItem from '@/layout/sider/IconItem.vue'
export default defineComponent({
  components: {
    // AppLink,
    IconItem
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { t } = useI18n()
    const { basePath } = toRefs(props)
    const onlyOneChild: any = ref(null)
    const hasOneShowingChild = (children = [] as any, parent: any) => {
      const showingChildren = children.filter((item: any) => {
        if (item.hidden) {
          return false
        } else {
          onlyOneChild.value = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    }

    const resolvePath = (routePath: any) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(basePath.value)) {
        return basePath
      }
      if (basePath.value === '/') {
        const basic = basePath.value.replace('/', '') + '/' + routePath.replace('/', '')
        if (basic.substring(basic.length - 1) === '/') {
          return basic
        } else {
          return basic
        }
      } else {
        const basic = '/' + basePath.value.replace('/', '') + '/' + routePath.replace('/', '')
        if (basic.substring(basic.length - 1) === '/') {
          return basic.substring(0, basic.length - 1)
        } else {
          return basic
        }
      }
    }
    const generateTitle = (title: any) => {
      return t('route.' + title)
    }
    return {
      hasOneShowingChild,
      onlyOneChild,
      resolvePath,
      generateTitle
    }
  }
})
</script>

<style scoped></style>
