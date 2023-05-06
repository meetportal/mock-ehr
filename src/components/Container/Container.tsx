import styles from './Container.module.css'

const Container = ({ className, contentClass, children }: any) => {
  className = `flex-grow flex flex-col overflow-auto ${className}`
  const contentStyles = `flex flex-col flex-grow h-0 overflow-auto  ${contentClass}`

  return (
    <div class={className}>
      <div class={contentStyles}>{children}</div>
    </div>
  )
}

export default Container
