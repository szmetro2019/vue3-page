import type { App } from 'vue'

import { setupfontsizeDirective } from './fontszie'

export function setupGlobDirectives(app: App) {
  setupfontsizeDirective(app)
}
