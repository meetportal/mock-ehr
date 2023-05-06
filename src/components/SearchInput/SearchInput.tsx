import styles from './SearchInput.module.css'

const SearchInput = (props: any) => {
  const value = props.value || ''
  const className = `${props.class} ${styles.SearchInput}`
  const onChange = props.onChange || (() => {})

  return <div class={className}>
    <sl-icon name="search" class="absolute select-none pointer-events-none left-3 top-[50%] -translate-y-[50%]"></sl-icon>
    <input type="text" placeholder='Search' value={value} onChange={onChange}></input>
  </div>
}

export default SearchInput
