import './css/main.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, ProductDetails, Nav, Login, Cart, Purchases, Loading, Footer, ProtectedRoutes } from './components/Index.jsx';

function App() {
  // localStorage.setItem('token', '');
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      { isLoading && <Loading/> }
      <HashRouter>
        <Nav/>
        <Routes>

          <Route path='/login' element={<Login/>}/>

          <Route element={ <ProtectedRoutes/> }>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/purchases' element={<Purchases/>}/>
          </Route>

        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App;