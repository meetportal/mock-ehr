import { TbHeartbeat } from 'solid-icons/tb'
import styles from './AppBar.module.css'

const AppBar = (props: any) => {
  return (
    <div class={styles.AppBar}>
      <div class="flex items-center gap-2 px-4">
        <TbHeartbeat size={24} />
        <span>Demo EHR</span>
      </div>
      {props.children}
    </div>
  )
}

export default AppBar
