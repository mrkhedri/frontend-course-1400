import React, {useState} from "react";
import axios from 'axios'
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

axios.defaults.baseURL = 'https://5dea5a130710f80014210282.mockapi.io';

function App() {
  const [basketList, setBasketList] = useState([])

  return (
    <UserContext.Provider value={{ basketList, setBasketList }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>

        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>

              <Route path="product">
                <Route path=":id/:slug" element={<Product/>}/>
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
