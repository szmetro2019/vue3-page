/**
 * Configure and register global directives
 */
import type { App } from 'vue'
import { setupLoadingDirective } from './loading'
import { setupfontsizeDirective } from './fontszie'
export function setupGlobDirectives(app: App) {
  setupLoadingDirective(app);
  setupfontsizeDirective(app);

}
