import AccountDropDown from '../components/AccountDropDown/AccountDropDown'
import AppBar from '../components/AppBar/AppBar'
import AppBarLink from '../components/AppBarLink/AppBarLink'
import Calendar from '../components/Calendar/Calendar'
import Container from '../components/Container/Container'
import SearchInput from '../components/SearchInput/SearchInput'
import SideNav from '../components/SideNav/SideNav'

const Main = () => {

  if (window.parent) {
    window.parent.postMessage({ type: 'resource', data: '' }, '*')
  }

  return (
    <div class="flex-grow flex h-full bg-gray-100 p-4">
      <SideNav />
      <Calendar />
    </div>
  )
}

export default Main
