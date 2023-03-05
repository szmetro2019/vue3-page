export default function () {
  let proxy

  onMounted(() => {
    proxy = getCurrentInstance() // 获取实例中的proxy
    window.addEventListener('resize', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })

  function resize() {
    proxy.exposed.resize()
  }
}
