import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Components/Homepage/Homepage'
import Categorypage from './Components/Categorypage/Categorypage'
import Productpage from './Components/Productpage/Productpage'
import LoginForm from './Components/LoginSignup/LoginSignup'
import AddCart from './Components/AddCart/AddCart'
import Gift from './Components/AddCart/Gift'
import Address from './Components/AddCart/Address'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/men' element={<Categorypage />} />
          <Route path='/woman' element={<Categorypage />} />
          <Route path='/product' element={<Productpage />} />
          <Route path='/signup' element={<LoginForm />} />
          <Route path='/carts' element={<AddCart/>} />
          <Route path='/gift' element={<Gift />} />
          <Route path='/address' element={<Address />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
