import AccountDropDown from '../../components/AccountDropDown/AccountDropDown'
import AppBar from '../../components/AppBar/AppBar'
import AppBarLink from '../../components/AppBarLink/AppBarLink'
import Container from '../../components/Container/Container'
import PatientList from '../../components/PatientList/PatientList'
import SearchInput from '../../components/SearchInput/SearchInput'
import SideNav from '../../components/SideNav/SideNav'

export default function Patient() {
  if (window.parent) {
    window.parent.postMessage({ type: 'resource', data: '' }, '*')
  }

  return (
    <Container className="w-screen h-screen">
      {/* <AppBar>
        <AppBarLink label="Calendar" to="/" />
        <AppBarLink label="Patients" to="/patients" />
        <AppBarLink label="Claims" to="/claims" />
        <AppBarLink label="Financials" to="/financials" />
        <SearchInput class="ml-auto" />
        <AccountDropDown />
      </AppBar> */}
      <div class="@container h-full flex gap-4 bg-gray-100 p-4">
        <SideNav />
        <PatientList />
      </div>
    </Container>
  )
}
