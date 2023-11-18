import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './context/UserContext';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';
import BusesBooking from './pages/BusesBookingPage/BusesBooking';
import HotelList from '../src/pages/HotelList'
import AdminPage from './pages/AdminPage/AdminPage';
import { DarkModeContextProvider } from './pages/AdminPage/context/darkModeContext';
import Users from './pages/AdminPage/components/Users';
import EditUser from './pages/AdminPage/components/editUser';
import NftMarketPlace from './pages/nft-market-place/NftMarketPlace';
import MintNFTPage from './pages/nft-market-place/pages/MintNFTPage';
import AnNFTPage from './pages/nft-market-place/pages/AnNFTPage';
import SellPage from './pages/nft-market-place/pages/SellPage';
import BuyPage from './pages/nft-market-place/pages/BuyPage';
import SaleInfo from './pages/nft-market-place/components/SaleInfo';
import TransferToken from './pages/nft-market-place/pages/TransferTokenPage';




// https://www.youtube.com/watch?v=MpQbwtSiZ7E&t=13572s


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL//'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {
  return (

    <UserContextProvider>
      <DarkModeContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/account/places/:id" element={<PlacesFormPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/account/bookings/:id" element={<BookingPage />} />
          </Route>
          <Route path="/booking-car" element={<BusesBooking />} />

          <Route path="/hotels" element={<HotelList />} />

          {/* Route admin */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/edit-user" element={<EditUser />} />
          <Route path="/nft-market-place" element={<NftMarketPlace />} />
          <Route path="/nft-market-place/mint-NFT" element={<MintNFTPage />} />
          <Route path="/nft-market-place/:id" element={<AnNFTPage />} />
          <Route path="/nft-market-place/sell" element={<SellPage />} />
          <Route path="/nft-market-place/buy" element={<BuyPage />} />
          <Route path="/nft-market-place/SaleInfo/:id" element={<SaleInfo />} />
          <Route path="/nft-market-place/transfer-token" element={<TransferToken />} />
        </Routes>
      </DarkModeContextProvider>
    </UserContextProvider>


  )
}

export default App
