import './index.css'

import { Router, hashIntegration } from '@solidjs/router'

import App from './App'
import { render } from 'solid-js/web'

declare module 'solid-js/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'sl-button': any
      'sl-card': any
      'sl-dropdown': any
      'sl-icon': any
      'sl-input': any
      'sl-menu': any
      'sl-menu-item': any
      'sl-divider': any
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
