import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { Link } from "react-router-dom";





const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className=" bg-purple-100 h-14 flex justify-around">
            <div className="flex w-2/12 h-14 justify-center items-center text-2xl">
                <Link to="/admin">
                    <span className="flex text-violet-600 text-2xl font-bold">lamadmin</span>
                </Link>
            </div>
            <div className="flex justify-between items-center w-10/12">
                <div className="w-fit ml-5">
                    <input type="text" placeholder="Search..." />

                </div>
                <div className="flex items-center justify-around gap-10  mr-5">
                    <div className="flex justify-center items-center gap-2" onClick={() => dispatch({ type: "TOGGLE" })}>
                        <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" >  <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        <div>
                            English
                        </div>
                    </div>
                    <div>
                        <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </div>
                    <div className="">
                        <img
                            src="https://haycafe.vn/wp-content/uploads/2022/02/anh-meo-cute-the-luoi-hai-huoc.jpg"
                            alt=""
                            className="w-10 h-10 rounded-full overflow-hidden items-center justify-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
