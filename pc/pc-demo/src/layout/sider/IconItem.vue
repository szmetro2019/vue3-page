<script lang="ts">
import { h, toRefs, defineComponent, resolveComponent } from 'vue'
// import { icons } from '@iconify-json/ant-design/index'
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
    if (icon.value.includes('i-ant-design-')) {
      // console.log(icons)
      // let result = icon.value.substring(13)
      // let svgString = iconList.icons[result].body
      // console.log(svgString, svgString.length, svgString.indexOf('d="'))
      // tagName = h('svg', { viewBox: '0 0 1024 1024', width: '1.2em', height: '1.2em' }, [
      //   h(`path`, {
      //     fill: 'currentColor',
      //     d: svgString.substring(svgString.indexOf('d="') + 3, svgString.length - 3)
      //   })
      // ])
      tagName = h('i', { class: 'custom-icon' }, [
        h(resolveComponent(`svg-icon`), { name: `${icon.value}` })
      ])
    } else {
      tagName = h('i', { class: 'custom-icon' }, [
        h(resolveComponent(`svg-icon`), { name: `${icon.value}` })
      ])
    }
    return () => {
      return tagName
    }
  }
})
</script>

<style></style>
