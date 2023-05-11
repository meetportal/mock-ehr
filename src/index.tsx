import './index.css'

import { Router, hashIntegration } from '@solidjs/router'

import App from './App'
import { render } from 'solid-js/web'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  )
}

if (root) {
  render(() => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ), root)
}