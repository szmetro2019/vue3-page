import type { Directive, App } from 'vue'

const fontsizeDirective: Directive = {
  mounted(el, binding) {
    // 下面会介绍各个参数的细节
    el.style.fontSize = binding.value + 'px'
  }
}

export function setupfontsizeDirective(app: App) {
  app.directive('fontsize', fontsizeDirective)
}

export default fontsizeDirective
