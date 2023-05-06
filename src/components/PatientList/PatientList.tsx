import Container from '../Container/Container'
import { For } from 'solid-js'
import PatientItem from '../PatientItem/PatientItem'
import { state } from '../../store'

const PatientList = () => {
  return (
    <Container className="w-full h-full">
      <div class="sticky top-0 z-10">
        <div class="px-3 py-2 text-sm bg-gray-200">Patients</div>
      </div>
      <div class="grid gap-[1px] bg-gray-200">
        <For each={state.patients}>{patient => <PatientItem {...patient} />}</For>
      </div>
    </Container>
  )
}

export default PatientList
