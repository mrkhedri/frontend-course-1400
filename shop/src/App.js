import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import UserContext from "./context/UserContext";

import theme from './theme';
import './App.scss';
import 'styles/font-awesome.css'

function App() {
  const [ids,setIds] = useState([])
  return (
    <UserContext.Provider value={{ids,setIds}}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>

        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>

              <Route path="product">
                <Route path=":slug" element={<Product/>}/>
              </Route>

              <Route path="about" element={<About/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default App;
