import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './context/UserContext';
import { LanguageContextProvider } from './context/LanguageContext';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';
import BusesBooking from './pages/BusesBookingPage/BusesBooking';
import DetailBusesBooking from './pages/BusesBookingPage/DetailBusesBoking';
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
import SaleInfo from './pages/nft-market-place/components-for-NFT/SaleInfo';
import TransferToken from './pages/nft-market-place/pages/TransferTokenPage';
import RoomsPage from './pages/RoomsPage';
import { RoomsContextProvider } from './context/RoomContext';
import SingleRoom from './pages/SingleRoom';
import HotelByCity from './pages/HotelByCity';
import DetailHotelPage from './pages/DetailHotelPage';
import AddTheNewRoomByHotel from './pages/HotelPage/AddTheNewRoomByHotel';
import ViewAllRoomByHotel from './pages/ViewAllRoomByHotel';
import ViewAndEditRoomByHotel from './pages/ViewAndEditRoomByHotel';
import CreateCarPage from './pages/BusesBookingPage/CreateCarPage';
import Dashboard from './socket/DashBoard';
import Form from './socket/Form';





axios.defaults.baseURL = import.meta.env.VITE_BASE_URL//'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {
  return (

    <UserContextProvider>
      <RoomsContextProvider>
        <LanguageContextProvider>
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
                <Route path="/places/allRoom/:idHotel" element={<ViewAllRoomByHotel />} />
                <Route path="/places/allRoom/:idHotel/:idHotelRoom" element={<ViewAndEditRoomByHotel />} />
                <Route path="/place/:id" element={<PlacePage />} />
                <Route path="/account/bookings" element={<BookingsPage />} />
                <Route path="/account/bookings/:id" element={<BookingPage />} />
                <Route path="/Rooms" element={<RoomsPage />} />
                <Route path="/room/add-the-new-room/:hotelId" element={<AddTheNewRoomByHotel />} />
                <Route path="/single-room/:id" element={<SingleRoom />} />

                <Route path="/cars/createCar" element={<CreateCarPage />} />



              </Route>
              <Route path="/booking-car" element={<BusesBooking />} />
              <Route path="/detail-booking-car" element={<DetailBusesBooking />} />

              <Route path="/chat" element={<Dashboard />} />
              <Route path='/users/sign_in' element={<Form isSignInPage={true} />} />
              <Route path='/users/sign_up' element={<Form isSignInPage={false} />} />

              {/* Route hotel */}
              <Route path="/hotels" element={<HotelList />} />
              <Route path="/hotels/:city" element={<HotelByCity />} />
              <Route path="/hotels/:city/:hoteName" element={<DetailHotelPage />} />

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
        </LanguageContextProvider>
      </RoomsContextProvider>
    </UserContextProvider>


  )
}

export default App
