<template>
  <template v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <template v-if="onlyOneChild.meta">
        <a-menu-item :key="resolvePath(onlyOneChild.path)">
          {{ generateTitle(onlyOneChild.meta.title) }}
        </a-menu-item>
      </template>
    </template>
    <a-sub-menu v-else :key="resolvePath(item.path)">
      <template #title>
        <span>
          <IconItem v-if="item.meta" :icon="item.meta.icon"></IconItem>
          {{ generateTitle(item.meta.title) }}
        </span>
      </template>
      <SiderbarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </a-sub-menu>
  </template>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { isExternal } from '@/utils/validate'
import IconItem from '@/layout/sider/IconItem.vue'
export default defineComponent({
  components: {
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
    const router = useRouter()
    const { t } = useI18n()
    const { basePath } = toRefs(props)

    const toJunp = (val: string) => {
      router.push({
        name: val
      })
    }
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
        onlyOneChild.value = {
          ...parent,
          path: '',
          noShowingChildren: true
        }
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
      return routePath ? routePath : routePath + basePath.value
    }
    const generateTitle = (title: any) => {
      return t('route.' + title)
    }
    return {
      toJunp,
      hasOneShowingChild,
      onlyOneChild,
      resolvePath,
      generateTitle
    }
  }
})
</script>

<style lang="scss"></style>
