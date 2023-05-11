import AccountDropDown from '@/components/AccountDropDown/AccountDropDown'
import AppBar from '@/components/AppBar/AppBar'
import AppBarLink from '@/components/AppBarLink/AppBarLink'
import Container from '@/components/Container/Container'
import PatientList from '@/components/PatientList/PatientList'
import SearchInput from '@/components/SearchInput/SearchInput'
import SideNav from '../components/SideNav/SideNav'

export default function Patient() {
  if (window.parent) {
    window.parent.postMessage({ type: 'resource', data: '' }, '*')
  }

  return (
    <div class="@container h-full flex gap-4 bg-gray-100 p-4">
      <SideNav />
      <PatientList />
    </div>
  )
}
