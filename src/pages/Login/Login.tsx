import './Login.css'

import { createSignal } from 'solid-js'
import { setUser } from '../../services/store'
import { useNavigate } from '@solidjs/router'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')

  if (window.parent) {
    window.parent.postMessage({ type: 'user', data: '' }, '*')
    window.parent.postMessage({ type: 'resource', data: '' }, '*')
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    setUser({ id: username(), username: username() })
    navigate('/')
  }
  
  return (
    <div class="flex flex-col gap-4 items-center justify-center h-screen w-screen">
      <img src="/favicon/android-chrome-192x192.png" class='w-16' />
      <div class="border rounded p-6 max-w-md w-full">
        <div class="mb-2 pb-2">Login</div>
        <form class="grid gap-2 w-200" onSubmit={handleSubmit}>
          <div class='text-xs'>Username</div>
          <input
            placeholder="demouser@mail.com"
            value={username()}
            class='rounded border p-2 w-full'
            onInput={(e: { target: { value: any } }) => setUsername(e.target.value)}
          />
          <div class='text-xs'>Password</div>
          <input
            placeholder="demopass"
            type="password"
            value={password()}
            class='rounded border p-2 w-full'
            onInput={(e: any) => setUsername(e.target.value)}
          />
          <button type="submit" class="mt-6 text-white bg-sky-600 hover:bg-sky-500 rounded py-4 font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
