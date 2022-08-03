import './css/main.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home,ProductDetails, Nav, Login, Cart, Purchases } from './components/Index.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;