import { For, createMemo } from 'solid-js'

import AccountDropDown from '../../components/AccountDropDown/AccountDropDown'
import AppBar from '../../components/AppBar/AppBar'
import AppBarLink from '../../components/AppBarLink/AppBarLink'
import { BiRegularChart } from 'solid-icons/bi'
import { BsBandaid } from 'solid-icons/bs'
import { BsCalendarCheck } from 'solid-icons/bs'
import Container from '../../components/Container/Container'
import { FaSolidPills } from 'solid-icons/fa'
import { FiSearch } from 'solid-icons/fi'
import { IoFlowerOutline } from 'solid-icons/io'
import Male1 from '../../assets/male_1.png'
import SearchInput from '../../components/SearchInput/SearchInput'
import { TbHeartbeat } from 'solid-icons/tb'
import { format } from 'date-fns'
import { state } from '../../services/store'
import { useParams } from '@solidjs/router'

const Chart = () => {
  const { id } = useParams()

  const patient = createMemo(() => {
    return state.patients?.find(patient => patient.id === parseInt(id))
  })
  const lastVisit = createMemo(() => {
    const pv = state.visits
      ?.filter(visit => visit.patientId === parseInt(id))
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    return pv?.length ? pv[pv.length - 1] : null
  })

  const age = createMemo(() => {
    const today = new Date()
    const birthDate = new Date(patient()?.dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  })

  if (window.parent) {
    window.parent.postMessage({ type: 'resource', data: JSON.stringify(patient()) }, '*')
  }

  return (
    <Container className="w-full" contentClass="w-screen !h-screen">
      {/* <AppBar>
        <AppBarLink label="Calendar" to="/" />
        <AppBarLink label="Patients" to="/patients" />
        <AppBarLink label="Claims" to="/claims" />
        <AppBarLink label="Financials" to="/financials" />
        <SearchInput class="ml-auto" />
        <AccountDropDown />
      </AppBar> */}
      <div class="flex-grow flex flex-col bg-gray-100">
        <div class="flex h-18">
          <div class="flex-shrink-0 flex items-center justify-center bg-gray-300 w-18 h-18 p-2">
            <div class="h-12 w-12 rounded-full bg-white overflow-hidden">
              <img src={Male1} class="mt-2" />
            </div>
          </div>
          <div class="flex-shrink-0 flex items-center w-[500px] bg-[#373554] text-white px-4 bg-arrow-right">
            <div>
              <div>
                {patient()?.firstName} {patient()?.lastName}
              </div>
              <div>
                {age()} {patient()?.sex ? 'F' : 'M'} | {patient()?.dob} | #{patient()?.id}
              </div>
            </div>
          </div>
          <div class="flex items-center p-4">Actions</div>
        </div>
        <div class="flex-grow flex">
          <div class="flex-shrink-0 w-16 flex flex-col gap-4 items-center text-xl bg-gray-200 px-2 py-4">
            <button class="flex flex-col gap-1 items-center">
              <FiSearch />
              <div class="text-[8px] uppercase">find</div>
            </button>
            <button class="flex flex-col gap-1 items-center">
              <IoFlowerOutline />
              <div class="text-[8px] uppercase">Allergy</div>
            </button>
            <button class="flex flex-col gap-1 items-center">
              <BsBandaid />
              <div class="text-[8px] uppercase">problem</div>
            </button>
            <button class="flex flex-col gap-1 items-center">
              <FaSolidPills />
              <div class="text-[8px] uppercase">meds</div>
            </button>
            <button class="flex flex-col gap-1 items-center">
              <TbHeartbeat />
              <div class="text-[8px] uppercase">vitals</div>
            </button>
            <button class="flex flex-col gap-1 items-center">
              <BiRegularChart />
              <div class="text-[8px] uppercase">results</div>
            </button>
            <button class="flex flex-col gap-1 items-center">
              <BsCalendarCheck />
              <div class="text-[8px] uppercase">visits</div>
            </button>
          </div>
          <div class="flex-grow grid grid-cols-2 h-full gap-4 p-4">
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-4 border rounded-md p-4 bg-white">
                <div class="flex flex-col w-1/2">
                  <div class="text-xl border-b">Problems</div>
                  <div class="flex flex-col text-sm text-gray-400 p-2 h-1/2">
                    <For each={patient()?.conditions}>{condition => <div>{condition}</div>}</For>
                  </div>
                  <div class="text-xl border-b">Medications</div>
                  <div class="flex flex-col text-sm text-gray-400 p-2">
                    <For each={patient()?.medications}>{medication => <div>{medication}</div>}</For>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="text-xl border-b">Allergies</div>
                  <div class="flex flex-col text-sm text-gray-400 p-2">
                    <For each={patient()?.allergies}>{allergy => <div>{allergy}</div>}</For>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-2 border rounded-md p-4 h-full bg-white">
                <div class="text-xl">Results</div>
                <div class="flex-grow flex flex-col items-center justify-center bg-gray-200">
                  <div>No Recent Results</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="border rounded-md p-4 h-full bg-white">
                <div class="text-xl border-b">Last Visit</div>
                {lastVisit() ? (
                  <>
                    <div class="grid grid-cols-2 gap-2 py-2">
                      <div>
                        <div class="text-xs text-gray-400">Provider</div>
                        <div>{lastVisit().provider}</div>
                      </div>
                      <div class="flex flex-col items-end">
                        <div class="text-xs text-gray-400">Encounter Date</div>
                        <div>{format(lastVisit().date, 'MM/dd/yyyy')}</div>
                      </div>
                    </div>
                    <div class="flex flex-col py-2">
                      <div class="text-xs text-gray-400">Reason for Visit</div>
                      <div>{lastVisit().purpose}</div>
                    </div>
                    <div class="flex flex-col py-2">
                      <div class="text-xs text-gray-400">HPI</div>
                      <div>
                        The patient reports steadily worsening sore throat over the past 2 days, associated with a
                        sensation of swelling. The pain is described as sharp, 4/10 in severity, located on the left
                        side of throat, and worsened with swallowing. Patient denies inability to swallow or difficulty
                        breathing, patient also denies fever, cough, or new skin rashes.
                      </div>
                    </div>
                    <div class="flex flex-col py-2">
                      <div class="text-xs text-gray-400">Assessment and Plan</div>
                      <div>
                        No significant PMH with acute pharyngitis for 2 days. The most likely cause of the patient’s
                        symptoms is viral pharyngitis, potentially herpangina (given the appearance of the tonsillar
                        lesion). A more serious viral/bacterial pharyngitis is less likely given the absence of fever or
                        significant erythema/exudate. There was no uvular deviation to suggest peritonsillar abscess and
                        no evidence of airway obstruction to suggest other acute processes (epiglottitis,
                        retropharyngeal abscess). The plan is to recommend supportive care and ibuprofen for symptomatic
                        relief. The patient will be discharged home in good condition with precautions to return if
                        symptoms worsen or patient begins to have difficulty swallowing/breathing.
                      </div>
                    </div>
                  </>
                ) : (
                  <div>No Visits</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Chart
