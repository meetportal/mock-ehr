import { A } from '@solidjs/router'
import { AiOutlineUser } from 'solid-icons/ai'
import { VsUnlock } from 'solid-icons/vs'
import { state } from '../../services/store'
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
        <div class='w-[200px] flex flex-col justify-center items-center gap-2 p-8 text-white bg-[#504b78] select-none'>
          <div class='rounded-full bg-[#7e77b5] w-24 h-24 flex items-center justify-center'>
            <AiOutlineUser size={48} />
          </div>
          <span class='uppercase font-medium text-sm'>{state.user?.username}</span>
        </div>
        <sl-menu-item>
          <A href="/login" class='flex items-center gap-2 py-2'>
            <VsUnlock />
            <span>Logout</span>
          </A>
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  )
}

export default AccountDropDown
