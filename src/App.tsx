import { Route, Routes, useLocation } from '@solidjs/router'
import { createEffect, onCleanup, onMount } from 'solid-js'

import Chart from './pages/Chart/Chart'
import Error from './pages/Error/Error'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import Patients from './pages/Patients/Patients'

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
      <Route path="/chart/:id" component={Chart} />
      <Route path="/patients" component={Patients} />
      <Route path="/" component={Main} />
      <Route path="**" component={Error} />
    </Routes>
  )
}
