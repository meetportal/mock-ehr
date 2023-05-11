import { TbHeartbeat } from 'solid-icons/tb'
import styles from './AppBar.module.css'

const AppBar = (props: any) => {
  return (
    <div class={styles.AppBar}>
      <div class="flex items-center gap-2 px-4">
        <div style="font-size: 18px;margin-top: 4px">
          <TbHeartbeat />
        </div>
        <span>Demo EHR</span>
      </div>
      {props.children}
    </div>
  )
}

export default AppBar
