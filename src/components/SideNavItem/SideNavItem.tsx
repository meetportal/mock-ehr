import { Match, Switch } from 'solid-js'

const SideNavItem = (props: any) => {
  const { label, count } = props

  return (
    <Switch>
      <Match when={count > 0}>
        <div class="flex items-center p-4 font-light bg-white">
          <div class="mr-auto">{label()}</div>
          <div class="px-3 py-1 text-white text-xs font-medium rounded-full bg-[#393855]">{count()}</div>
        </div>
      </Match>
      <Match when={count === 0}>
        <div class="flex items-center p-4 font-light bg-white">
          <div class="mr-auto">{label()}</div>
          <div class="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-100 rounded-full">{count()}</div>
        </div>
      </Match>
    </Switch>
  )
}

export default SideNavItem
