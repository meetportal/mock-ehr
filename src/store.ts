import { demoPatients, demoVisits } from './consts/patients'

import { createStore } from 'solid-js/store'

export const [state, setState] = createStore<{
  patients?: any[]
  visits?: any[]
}>({
  patients: demoPatients,
  visits: demoVisits.map((v, i) => ({ ...v, date: new Date(v.date) })),
})
