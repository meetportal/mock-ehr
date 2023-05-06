import { A } from '@solidjs/router'
import styles from './AppBarLink.module.css'

const AppBarLink = ({ label, to = '/' }: any) => {
  return <A href={to} class={styles.AppBarLink}>{label}</A>
}

export default AppBarLink
