
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import HeaderList from "./components/HeaderList";
import SearchBar from "./components/SearchBar";
export default function Header() {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    return (
        <div>
            <header className='flex justify-between'>
                <Link to={'/'} className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className='font-bold text-xl'>Duy'mup</span>
                </Link>
                {/* <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
                    <div>Anywhere</div>
                    <div className='border-l border-gray-300'></div>
                    <div>Any week</div>
                    <div className='border-l border-gray-300'></div>
                    <div>Add guest</div>
                    <button className='bg-primary text-white p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    
                </div> */}
                {/* <form action="" className="relative mx-auto w-max">
                    <input type="search"
                        className="peer cursor-pointer relative z-10 h-12 w-200 rounded-full border bg-transparent pl-12 outline-none focus:border-lime-300 focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </form> */}
                <SearchBar />
                <Link to={user ? '/account/places' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className='bg-gray-500 text-white rounded-full p-1 border border-gray-500' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {!!user && (
                        <div>
                            {user?.data?.name || user?.name}
                        </div>
                    )}
                </Link>
            </header>
            <div>
                <HeaderList />
            </div>
        </div>
    )
}