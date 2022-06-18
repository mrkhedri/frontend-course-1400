import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'

import theme from './theme';
import './App.scss';
import 'styles/font-awesome.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="product">
              <Route path=":productId" element={<Product />} />
            </Route>

            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
