import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ToastContainer } from 'react-toastify'
// import { ethers } from "ethers";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer>
      </ToastContainer>
      <ThirdwebProvider
        activeChain="fantom-testnet"
        // signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
        clientId="2797b3f9d95ffff77be7cb8dfc5abb26">
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
