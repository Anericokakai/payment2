import { Route, Routes  } from 'react-router-dom'
import Create from './components/Create.jsx'
import Login from './components/Login.jsx'
function App() {

  return (
   <div>
    <Routes>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
   </div>
  )
}

export default App
