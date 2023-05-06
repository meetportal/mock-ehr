import { A } from '@solidjs/router'
import Female1 from '../../assets/female_1.png'
import Female2 from '../../assets/female_2.png'
import Male1 from '../../assets/male_1.png'
import Male2 from '../../assets/male_2.png'
import { createMemo } from 'solid-js'
import { state } from '../../store'

const PatientItem = (props: any) => {
  const patient = createMemo(() => {
    return state.patients?.find(patient => patient.id === props.id)
  })

  const genderImage = createMemo(() => {
    switch (patient()?.sex) {
      case 1:
        // randomly choose between Female1 or Female2
        return Math.random() < 0.5 ? Female1 : Female2
      case 0:
        // randomly choose between Male1 or Male2
        return Math.random() < 0.5 ? Male1 : Male2
      default:
        return Male1
    }
  })

  const age = createMemo(() => {
    const today = new Date()
    const birthDate = new Date(patient()?.dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  })

  return (
    <A href={`/chart/${patient().id}`} class="flex items-center gap-4 bg-white select-none hover:bg-gray-50 p-2">
      <div class="w-14">
        <div class="w-10 h-10 overflow-hidden bg-gray-300 rounded-full px-3w-10">
          <img src={genderImage()} class="object-contain w-10 opacity-30" />
        </div>
      </div>
      <div class="w-40">
        <div>
          {patient().firstName} {patient().lastName}
        </div>
        <div class="text-sm font-light">
          {age()} yrs {patient()?.sex ? 'F' : 'M'}
        </div>
      </div>
      <div class="mr-auto">
        <div class="text-sm font-light">{props.address}</div>
      </div>
      <div class="pr-5">{props.phone}</div>
    </A>
  )
}

export default PatientItem
