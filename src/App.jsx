import './css/main.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home,ProductDetails, Nav, Login, Cart, Purchases, Loading, Footer } from './components/Index.jsx';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      { isLoading && <Loading/> }
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App;