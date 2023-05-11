import { Show, createSignal } from 'solid-js'

import { A } from '@solidjs/router'
import { AiOutlineUser } from 'solid-icons/ai'
import { BiRegularUser } from 'solid-icons/bi'
import { VsUnlock } from 'solid-icons/vs'
import clickOutside from '@/helpers/clickOutside'
import { state } from '../../services/store'

export default function () {
  const [showDropdown, setShowDropdown] = createSignal(false)
  clickOutside // needed for compiler

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown())
  }
  return (
    <button class="flex items-center justify-center w-8 h-8 rounded-full bg-white/10" onClick={toggleDropdown}>
      <div class="flex items-center justify-center" style="font-size: 18px;">
        <BiRegularUser />
      </div>
      <Show when={showDropdown()}>
        <div use:clickOutside={toggleDropdown} class='absolute top-14 right-1 rounded bg-white drop-shadow-md'>
          <div class='w-[200px] flex flex-col justify-center items-center gap-2 p-8 text-white bg-[#504b78] select-none'>
            <div class='rounded-full bg-[#7e77b5] w-24 h-24 flex items-center justify-center'>
              <AiOutlineUser size={48} />
            </div>
            <span class='uppercase font-medium text-sm'>{state.user?.username}</span>
          </div>
          <A href="/login" class='flex items-center justify-center gap-2 p-2 w-full  text-black'>
            <VsUnlock />
            <span>Logout</span>
          </A>
        </div>
      </Show>
    </button>
  )
}
