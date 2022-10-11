import Dashboard from "./components/Dashboard/Dashboard";
import Report from './components/Reports/Report'
import Finance from './components/Finances/Finance'
import Document from './components/Documents/Document'
import Members from './components/Members/Members'
import { Routes , Route} from 'react-router-dom'
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
import Home from "./components/Home/SignIn/Home";
import SignUp from "./components/Home/SignUp/SignUp"

function App() {
  return(
    <>
   {/* <p>This is Sample App plus addition!</p>; */}

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>}/>

      {/* <Route path='/privateComponent' element={<PrivateComponent/>}>
        <Route path='/privateComponent/dashboard' element={<Dashboard/>}/>
        <Route path='/privateComponent/report' element={<Report/>} />
        <Route path='/privateComponent/finance' element={<Finance/>} />
        <Route path='/privateComponent/members' element={<Members/>} />
        <Route path='/privateComponent/documents' element={<Document/>} />
      </Route> */}

    </Routes>

   
   </>
  )
}

export default App;
