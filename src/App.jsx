import './css/main.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, ProductDetails, Nav, Login, Purchases, Loading, Footer, ProtectedRoutes, SignUp } from './components/Index.jsx';

function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      { isLoading && <Loading/> }
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route element={ <ProtectedRoutes/> }>
            <Route path='/purchases' element={<Purchases/>}/>
          </Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App;