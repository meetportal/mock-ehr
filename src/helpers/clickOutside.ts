import { onCleanup } from "solid-js"

export default function clickOutside(el: any, accessor: any) {
  const onMouseDown = (e: any) => setTimeout(() => {
    !el.contains(e.target) && accessor()?.()
  }, 100)
  document.body.addEventListener("mousedown", onMouseDown)

  onCleanup(() => document.body.removeEventListener("mousedown", onMouseDown,))
}