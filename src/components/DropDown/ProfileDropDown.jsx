

import { Fragment, useContext, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import LanguageDropDown from './LanguageDropDown'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const ProfileDropDown = () => {
    const [redirect, setRedirect] = useState("");
    const { setUser } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const logout = async () => {
        if (user) {
            await axios.post("/logout", {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: 'Bearer ' + localStorage.getItem('user:token')
                }
            });
            localStorage.removeItem('user:token');
            localStorage.removeItem('user:detail');

            toast.success("Logout success");
            setRedirect("/login/")
            setUser("")
        } else {
            toast.success("You are not log in")
        }
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className='flex items-center justify-center'>
                <Menu.Button
                    className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm"
                // className="inline-flex w-full justify-start text-sm  text-gray-900"
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}

                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute -right-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:bg-slate-300'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:bg-slate-300'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:bg-slate-300'
                                    )}
                                >
                                    <LanguageDropDown />
                                </a>
                            )}
                        </Menu.Item>
                        <form
                        //  method="POST" action="#"
                        >
                            <Menu.Item>
                                {({ active }) => (
                                    // <button
                                    //     //type="submit"
                                    //     className={('bg-white text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-300')}
                                    //     onClick={logout}
                                    // >
                                    //     Sign out
                                    // </button>
                                    <NavLink to={"/"} exact
                                        className="Nav_link bg-white text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-300"
                                        activeStyle={{ color: 'white' }} onClick={logout}>Logout </NavLink>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default ProfileDropDown;