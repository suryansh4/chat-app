import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  {/* this is done fo the react router dom/*/}
    <ChakraProvider>
        <App />
     </ChakraProvider>
    
  </BrowserRouter>
     
  </React.StrictMode>
);


