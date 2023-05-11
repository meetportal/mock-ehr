import AccountDropDown from "@/components/AccountDropDown/AccountDropDown"
import AppBar from "@/components/AppBar/AppBar"
import AppBarLink from "@/components/AppBarLink/AppBarLink"
import Container from "@/components/Container/Container"
import { Outlet } from "@solidjs/router"
import SearchInput from "@/components/SearchInput/SearchInput"

export default function () {
  return (
    <div class="@container h-screen w-screen flex flex-col">
      <Container className="w-screen h-screen">
        <AppBar>
          <AppBarLink label="Calendar" to="/" />
          <AppBarLink label="Patients" to="/patients" />
          <AppBarLink label="Claims" to="/claims" />
          <AppBarLink label="Financials" to="/financials" />
          <SearchInput class="ml-auto" />
          <AccountDropDown />
        </AppBar>
        <Outlet />
      </Container>
    </div>
  )
}