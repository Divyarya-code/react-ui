import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Issue from './Page/Issue.jsx'
import OilRig from './Page/oilrig.jsx'
import Alert from './Page/alert.jsx'
import SignIn from './Page/login.jsx'
import BarChart from './Page/Dashboard.jsx'


export default function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/Dashboard' element={<BarChart />}></Route>
        <Route path='/Issue' element={<Issue />}></Route>
        <Route path='/oilrig' element={<OilRig />}></Route>
        <Route path='/alert' element={<Alert />}></Route>
    </Routes>
  </BrowserRouter>
 </>
  )
}
