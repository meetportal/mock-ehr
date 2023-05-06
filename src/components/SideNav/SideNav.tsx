import Container from '../Container/Container'
import { For } from 'solid-js'
import SideNavItem from '../SideNavItem/SideNavItem'
import styles from './SideNav.module.css'

const SideNav = () => {

  const links = [
    { label: 'Urgent Tasks', count: 4 },
    { label: 'Patient in Office', count: 2 },
    { label: 'Encounters', count: 0 },
    { label: 'Appointement Requests', count: 0 },
    { label: 'Orders / Rx / Auth', count: 2 },
    { label: 'Lab & Imaging', count: 1 },
    { label: 'Clinical Documents', count: 0 },
    { label: 'Admin Messages', count: 3 },
    { label: 'Needs Follow-up', count: 1 },
  ]


  return (
    <Container className="transition-all flex-shrink-0 w-0 @5xl:w-[360px] @5xl:pr-4">
      <div class={styles.SideNavHeader}>
        Clinical Inbox
      </div>
      <div class={styles.SideNavBody}>
        <For each={links}>
          {link => <SideNavItem label={link.label} count={link.count} />}
        </For>
      </div>
    </Container>
  )
}

export default SideNav
