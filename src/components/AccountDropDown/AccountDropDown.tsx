import { A } from '@solidjs/router'
import styles from './AccountDropDown.module.css'

const AccountDropDown = () => {
  return (
    <sl-dropdown>
      <button slot="trigger" class="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
        <div class="flex items-center justify-center" style="font-size: 18px;">
          <sl-icon name="person"></sl-icon>
        </div>
      </button>
      <sl-menu>
        <A href="/login">
          <sl-menu-item>Logout</sl-menu-item>
        </A>
      </sl-menu>
    </sl-dropdown>
  )
}

export default AccountDropDown
