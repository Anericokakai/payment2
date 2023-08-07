import { Route, Routes  } from 'react-router-dom'
import Login from './components/Login.jsx'

import './App.css'

function App() {

  return (
   <div>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
   </div>
  )
}

export default App
