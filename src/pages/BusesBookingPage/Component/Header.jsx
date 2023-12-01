import { Link } from "react-router-dom";
import backgroundDalat from "../../../../public/du_lich_da_lat.jpg";
import SearchBar from "./SearchBar";





export default function Header() {
    return (
        <div
            //className="bg-[url('https://th.bing.com/th/id/OIP.0DtMbMsmBm6NMZq4y085ugHaD8?rs=1&pid=ImgDetMain')]"
            className="bg-slate-200"
        >
            <header className="flex  justify-around">
                <Link to={'/'} className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className='font-bold text-xl'>Duy'mup</span>
                </Link>
                <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                        <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div className="font-medium">
                            Support
                        </div>
                    </div>
                    <Link>
                        <div className="flex items-center gap-2">
                            <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
                            <div className="font-medium">
                                Cart
                            </div>
                        </div>
                    </Link>
                </div>
            </header>
            <div className="mt-5 ml-44 font-semibold">
                Train, Bus, Ferry, Transfer & Flight Tickets Booking in Asia & Worldwide
            </div>
            <div className="flex justify-center mt-5">
                <SearchBar />
            </div>
        </div >
    )
}