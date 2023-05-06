// import '@shoelace-style/shoelace/dist/themes/light.css'
// // import '@shoelace-style/shoelace/dist/themes/dark.css'
// // import '@shoelace-style/shoelace/dist/components/alert/alert.js'
// // import '@shoelace-style/shoelace/dist/components/avatar/avatar.js'
// // import '@shoelace-style/shoelace/dist/components/badge/badge.js'
// import '@shoelace-style/shoelace/dist/components/button/button.js'
// import '@shoelace-style/shoelace/dist/components/card/card.js'
// // import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js'
// // import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'
// // import '@shoelace-style/shoelace/dist/components/divider/divider.js'
// import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
// import '@shoelace-style/shoelace/dist/components/icon/icon.js'
// // import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
// import '@shoelace-style/shoelace/dist/components/input/input.js'
// // import '@shoelace-style/shoelace/dist/components/textarea/textarea.js'
// import '@shoelace-style/shoelace/dist/components/menu/menu.js'
// import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
// // import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js'
// // import '@shoelace-style/shoelace/dist/components/radio/radio.js'
// // import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js'
// // import '@shoelace-style/shoelace/dist/components/spinner/spinner.js'
// // import '@shoelace-style/shoelace/dist/components/switch/switch.js'
// // import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js'
import './index.css'

import { Router, hashIntegration } from '@solidjs/router'

import App from './App'
import { render } from 'solid-js/web'

declare module 'solid-js/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      // 'sl-avatar': any
      // 'sl-badge': any
      'sl-button': any
      'sl-card': any
      // 'sl-checkbox': any
      'sl-dropdown': any
      'sl-icon': any
      // 'sl-icon-button': any
      'sl-input': any
      'sl-menu': any
      'sl-menu-item': any
      // 'sl-progress-bar': any
      // 'sl-radio': any
      // 'sl-radio-group': any
      // 'sl-spinner': any
      // 'sl-switch': any
      // 'sl-tooltip': any
      // 'sl-button-group': any
      // 'sl-dialog': any
      // 'sl-divider': any
      // 'sl-textarea': any
      iframe: any
      webview: any
    }
    interface Directives {
      model: [() => any, (v: any) => any]
    }
  }
}

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
)
