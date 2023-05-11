import { FiSearch } from 'solid-icons/fi'
import styles from './SearchInput.module.css'

export default function (props: any) {
  const value = props.value || ''
  const className = `${props.class} ${styles.SearchInput}`
  const onChange = props.onChange || (() => { })

  return (
    <div class={className}>
      <div class="absolute select-none pointer-events-none left-3 top-[50%] -translate-y-[50%]">
        <FiSearch />
      </div>
      <input type="text" placeholder='Search' value={value} onChange={onChange}></input>
    </div>
  )
}

