import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Fav from './Pages/Fav';
import Layout from './components/Layout';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} >
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/fav" element={<Fav />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App