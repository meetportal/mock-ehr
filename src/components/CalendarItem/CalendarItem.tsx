import { createMemo, createSignal, onCleanup, onMount } from 'solid-js'
import { dateIsPast, howManyMinutesAwayFromDate, isDateWithinMinutes } from '../../consts/patients'

import { A } from '@solidjs/router'
import Female1 from '../../assets/female_1.png'
import Female2 from '../../assets/female_2.png'
import Male1 from '../../assets/male_1.png'
import Male2 from '../../assets/male_2.png'
import { format } from 'date-fns'
import { state } from '../../store'

const CalendarItem = (props: any) => {
  const [appointment, setAppointment] = createSignal('')
  const [timer, setTimer] = createSignal<any>(null)
  const patient = createMemo(() => {
    return state.patients?.find(patient => patient.id === props.patientId)
  })

  const status = createMemo(() => {
    const stat = patient().id % 3
    const status = stat === 0 ? 'Existing Patient' : stat === 1 ? 'New Patient' : 'Procedure'
    switch (status) {
      case 'Existing Patient':
        return { status, class: 'w-[10px] h-16 bg-green-500' }
      case 'New Patient':
        return { status, class: 'w-[10px] h-16 bg-yellow-500' }
      case 'Procedure':
        return { status, class: 'w-[10px] h-16 bg-red-500' }
      default:
        return { status, class: 'w-[10px] h-16 bg-blue-400' }
    }
  })

  const appointmentColor = createMemo(() => {
    switch (appointment()) {
      case 'confirmed':
        return 'bg-gray-100 text-gray-600'
      case 'pending':
        return 'bg-yellow-500'
      case 'exam':
        return 'bg-[#393855]'
      case 'arrived':
        return 'bg-gray-200 text-gray-600'
      case 'checked_in':
        return 'bg-green-600'
      case 'checked_out':
        return 'bg-gray-100 text-gray-400'
      case 'intake':
        return 'bg-green-600'
      default:
        return 'hidden bg-red-500'
    }
  })

  const appointmentText = createMemo(() => {
    switch (appointment()) {
      case 'confirmed':
        return 'Confirmed'
      case 'pending':
        return 'Pending'
      case 'exam':
        return 'Exam'
      case 'arrived':
        return 'Arrived'
      case 'checked_in':
        return 'Checked In'
      case 'checked_out':
        return 'Checked Out'
      default:
        return appointment()
    }
  })

  const genderImage = createMemo(() => {
    switch (patient()?.sex) {
      case 1:
        // randomly choose between Female1 or Female2
        return patient().id % 2 ? Female1 : Female2
      case 0:
        // randomly choose between Male1 or Male2
        return patient().id % 2 ? Male1 : Male2
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
  const calculateAppointment = () => {
    const minutes = howManyMinutesAwayFromDate(props.date)
    if (props.date && minutes > 0) {
      if (minutes < 45) setAppointment('exam')
      else setAppointment('checked_out')
    } else {
      if (minutes > -15) setAppointment('intake')
      if (minutes > -30) setAppointment('checked_in')
      else if (minutes > -45) setAppointment('arrived')
      else if (minutes > -60) setAppointment('pending')
      else setAppointment('confirmed')
    }
  }
  onMount(() => {
    if (timer()) clearInterval(timer())
    setTimer(
      setInterval(() => {
        calculateAppointment()
      }, 1000)
    )
    calculateAppointment()
  })
  onCleanup(() => {
    if (timer()) clearInterval(timer())
  })

  return (
    <A href={`/chart/${patient().id}`} class="flex items-center gap-4 bg-white select-none hover:bg-gray-50">
      <div class={status().class}></div>
      <div class="w-20">
        <div>{props.date ? format(props.date, 'h:mm a') : ''}</div>
        <div class="text-sm font-light">45 min</div>
      </div>
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
        <div class="font-medium">{status().status}</div>
        <div class="text-sm font-light">{props.purpose}</div>
      </div>
      <div class="pr-5">
        <div class={`px-3 py-2 text-xs rounded ${appointmentColor()}`}>{appointmentText()}</div>
      </div>
    </A>
  )
}

export default CalendarItem
