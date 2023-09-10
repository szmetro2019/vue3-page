<!-- <template> -->
<!-- <svg-icon
            v-if="routerItem.meta && routerItem.meta.icon"
            :name="
              onlyOneChild.meta.icon ||
              (routerItem.meta && routerItem.meta.icon)
            "
          /> -->
<!-- <svg-icon v-if="routerItem.meta" :name="routerItem.meta.icon" /> -->
<!-- </template> -->
<script lang="ts">
import { h, toRefs, defineComponent, resolveComponent } from 'vue'
export default defineComponent({
  name: 'IocnItem',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { icon } = toRefs(props)
    let tagName: any = null
    if (icon.value.includes('i-ep-')) {
      let result = icon.value.substring(5)
      tagName = h('i', { class: 'el-icon' }, [h(resolveComponent(`${result}`))])
    } else {
      // tagName = h(`svg`, { class: `svg-icon`, "aria-hidden": true }, [
      //   h("use", { href: `#icon-${icon.value}`, fill: "" }),
      // ]);
      tagName = h('i', { class: 'el-icon' }, [
        h(resolveComponent(`svg-icon`), { name: `${icon.value}` })
      ])
    }
    return () => {
      return tagName
    }
  }
})
</script>

<style lang="scss"></style>
