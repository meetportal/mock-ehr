import { Show } from 'solid-js'

const SideNavItem = props => {
  const { label, count } = props

  return (
    <>
      <Show when={count > 0}>
        <div class="flex items-center p-4 font-light bg-white">
          <div class="mr-auto">{label()}</div>
          <div class="px-3 py-1 text-white text-xs font-medium rounded-full bg-[#393855]">{count()}</div>
        </div>
      </Show>
      <Show when={count === 0}>
        <div class="flex items-center p-4 font-light bg-white">
          <div class="mr-auto">{label()}</div>
          <div class="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-100 rounded-full">{count()}</div>
        </div>
      </Show>
    </>
  )
}

export default SideNavItem
