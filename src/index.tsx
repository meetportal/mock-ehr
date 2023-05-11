import './index.css'

import { Router, hashIntegration } from '@solidjs/router'

import App from './App'
import clickOutside from './helpers/clickOutside'
import { render } from 'solid-js/web'

const root = document.getElementById('root')

declare module 'solid-js/jsx-runtime' {
  namespace JSX {
    interface Directives {
      clickOutside: typeof clickOutside
    }
  }
}


if (root) {
  render(() => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ), root)
}