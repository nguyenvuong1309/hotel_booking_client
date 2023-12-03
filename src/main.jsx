import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ToastContainer } from 'react-toastify'
// import { ethers } from "ethers";
import global_mandarind from './language/mandarind/global.json';
import global_vietnamese from './language/vietnamese/global.json';
import global_english from './language/english/global.json';
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'


i18next.init({
  interpolation: { escapeValue: false },
  lng: "mandarind",
  resources: {
    mandarind: {
      global: global_mandarind,
    },
    vietnamese: {
      global: global_vietnamese,
    },
    english: {
      global: global_english,
    }
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer>
      </ToastContainer>
      <ThirdwebProvider
        activeChain="fantom-testnet"
        // signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
        clientId="2797b3f9d95ffff77be7cb8dfc5abb26">
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
