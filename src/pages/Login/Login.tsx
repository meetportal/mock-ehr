import './Login.css'

import { createSignal, onMount } from 'solid-js'

import { setUser } from '../../services/store'
import { useNavigate } from '@solidjs/router'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')

  let usernameRef: any
  let passwordRef: any

  if (window.parent) {
    window.parent.postMessage({ type: 'user', data: '' }, '*')
    window.parent.postMessage({ type: 'resource', data: '' }, '*')
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    setUser({ id: username(), username: username() })
    navigate('/')
  }

  onMount(() => {
    usernameRef.addEventListener('sl-input', (e: any) => setUsername(e.target.value))
    passwordRef.addEventListener('sl-input', (e: any) => setPassword(e.target.value))
  })

  return (
    <div class="flex flex-col gap-4 items-center justify-center h-screen w-screen">
      <img src="/favicon/android-chrome-192x192.png" class='w-16' />
      <sl-card class="card-header1 max-w-md w-full">
        <div slot="header">Login</div>
        <form class="grid gap-2 w-200" onSubmit={handleSubmit}>
          <sl-input
            ref={usernameRef}
            label="Username"
            placeholder="demouser@mail.com"
            value={username()}
            onInput={(e: { target: { value: any } }) => setUsername(e.target.value)}
          />
          <sl-input
            ref={passwordRef}
            label="Password"
            placeholder="demopass"
            type="password"
            value={password()}
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <sl-button type="submit" variant="primary" size="large" class="mt-6">
            Login
          </sl-button>
        </form>
      </sl-card>
    </div>
  )
}
