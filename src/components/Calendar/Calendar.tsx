import CalendarItem from '../CalendarItem/CalendarItem'
import Container from '../Container/Container'
import { For } from 'solid-js'
import { state } from '../../store'
import styles from './Calendar.module.css'

const Calendar = () => {
  const now = new Date()
  // convert to Monday January 23, 2023
  const date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Container className="w-full">
      <div class="sticky top-0 z-10">
        <div class={styles.CalendarHeader}>
          <div class="mr-auto">{date}</div>
          <button class={styles.CalendarLink}>Month</button>
          <button class={styles.CalendarLink}>Week</button>
          <button class={styles.CalendarLink}>Today</button>
          <button class="flex items-center justify-center">
            <sl-icon name="chevron-left" />
          </button>
          <button class="flex items-center justify-center">
            <sl-icon name="chevron-right" />
          </button>
        </div>
        <div class="px-3 py-2 text-sm bg-gray-200">Samantha Jones MD</div>
      </div>
      <div class="grid gap-[1px] bg-gray-200">
        <For each={state.visits}>{item => <CalendarItem {...item} />}</For>
      </div>
    </Container>
  )
}

export default Calendar