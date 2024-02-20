// Import global assets
import type { Plugin } from 'vue'
import './assets/styles/global.scss'

import * as components from './components/index'

// Create module definition for Vue.use()
const WitnetPlugin: Plugin & { installed: boolean} = {
  installed: false,

  install(app, options) {
    if (this.installed) return

    this.installed = true
    const hasComponentsOption = options && options.withComponents?.length > 0

    for (const key in components) {
      if (hasComponentsOption && options.withComponents.includes(key)) {
        app.component(key, (components as any)[key])
      } else if (!hasComponentsOption) {
        app.component(key, (components as any)[key])
      }
    }
  },
}

// Exporting components
export * from './components/index'

// Exporting the plugin definition to Vue.use
export default WitnetPlugin 
