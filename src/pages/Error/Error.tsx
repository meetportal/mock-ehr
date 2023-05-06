import { A } from "@solidjs/router"

const Error = () => {

  if (window.parent) {
    window.parent.postMessage({ type: 'resource', data: '' }, '*')
  }

  return (
    <div class="h-screen w-screen flex flex-col items-center justify-center">
      <h1>404 PAGE</h1>
      <h3 class="pb-12">DEMO NOT IMPLEMENTED</h3>
      <A href="/" class="px-3 py-2 text-white text-xs rounded bg-[#393855]">Calendar</A>
    </div>
  )
}

export default Error