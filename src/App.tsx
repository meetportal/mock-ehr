import { A, Route, Routes, useLocation } from '@solidjs/router'
import { createEffect, lazy, onCleanup, onMount } from 'solid-js'

import BaseLayout from './layouts/BaseLayout'

const Login = lazy(() => import('./pages/Login'))
const Chart = lazy(() => import('./pages/Chart'))
const Patients = lazy(() => import('./pages/Patients'))
const Main = lazy(() => import('./pages/Main'))
const Error = lazy(() => import('./pages/Error'))

export default function App() {
  const location = useLocation()

  createEffect(() => {
    if (window !== top) {
      window.parent.postMessage({ type: 'location_change', url: location.pathname }, '*')
    }
  })

  // capture keydown events and pass them to the parent window
  const handleKeyDown = (event: KeyboardEvent) => {
    if (window !== top) {
      window.parent.postMessage(
        { type: 'keydown', key: event.key, metaKey: event.metaKey, ctrlKey: event.ctrlKey },
        '*'
      )
    }
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  onCleanup(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/" component={BaseLayout}>
        <Route path="/chart/:id" component={Chart} />
        <Route path="/patients" component={Patients} />
        <Route path="/" component={Main} />
      </Route>
      <Route path="*" component={Error} />
    </Routes >
  )
}
