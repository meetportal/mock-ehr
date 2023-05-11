import { demoPatients, demoVisits } from '../consts/patients'

import { createStore } from 'solid-js/store'

interface UserType {
  id: string
  username: string
}

export const [state, setState] = createStore<{
  user?: UserType
  patients?: any[]
  visits?: any[]
}>({
  patients: demoPatients,
  visits: demoVisits.map((v, i) => ({ ...v, date: new Date(v.date) })),
})

export const setUser = (user?: UserType) => {
  setState({ user })
  localStorage.setItem('ehrUser', JSON.stringify(user))
  if (window.parent) {
    window.parent.postMessage({ type: 'user', data: user }, '*')
  }
}

export const clearUser = () => {
  setState({ user: undefined })
  localStorage.removeItem('ehrUser')
  if (window.parent) {
    window.parent.postMessage({ type: 'user', data: undefined }, '*')
  }
}

// restore user from local storage
const user = localStorage.getItem('ehrUser')
if (user) {
  setUser(JSON.parse(user))
}
