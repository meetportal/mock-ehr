import { A, Route, Routes, useLocation } from '@solidjs/router'
// import { createEffect, lazy, onCleanup, onMount } from 'solid-js'

// const Login = lazy(() => import('./pages/Login/Login'))
// const Chart = lazy(() => import('./pages/Chart/Chart'))
// const Patients = lazy(() => import('./pages/Patients/Patients'))
// const Main = lazy(() => import('./pages/Main/Main'))
// const Error = lazy(() => import('./pages/Error/Error'))

export default function App() {
  // const location = useLocation()

  // createEffect(() => {
  //   if (window !== top) {
  //     window.parent.postMessage({ type: 'location_change', url: location.pathname }, '*')
  //   }
  // })

  // // capture keydown events and pass them to the parent window
  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (window !== top) {
  //     window.parent.postMessage(
  //       { type: 'keydown', key: event.key, metaKey: event.metaKey, ctrlKey: event.ctrlKey },
  //       '*'
  //     )
  //   }
  // }

  // onMount(() => {
  //   document.addEventListener('keydown', handleKeyDown)
  // })

  // onCleanup(() => {
  //   document.removeEventListener('keydown', handleKeyDown)
  // })

  return (
    <Routes>
      <Route path="/" element={(
        <div>
        <A href="/hi">hello</A>
      </div>
      )} />
      <Route path="/hi" element={<div>hi</div>} />
      {/* <Route path="/login" component={Login} />
      <Route path="/chart/:id" component={Chart} />
      <Route path="/patients" component={Patients} />
      <Route path="/" component={Main} />
      <Route path="*" component={Error} /> */}
    </Routes>
  )
}
