



import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function RentalCarDropDown() {
    const [t, i18n] = useTranslation("global");
    async function logout() {
        // await axios.post("/logout", {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         authorization: 'Bearer ' + localStorage.getItem('token')
        //     }
        // });
        // localStorage.removeItem('token');
        // toast.success("Logout success");
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className='flex items-center justify-center'>
                <Menu.Button className="flex justify-center items-center p-4 gap-2 rounded-full bg-slate-500 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                    <svg className="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="5" cy="18" r="3" />
                        <circle cx="19" cy="18" r="3" />
                        <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                        <circle cx="17" cy="5" r="1" />
                    </svg>
                    <div>
                        {/* Rental car */}
                        {t("RentalCarDropDown.rentalCar")}
                    </div>
                    <ChevronDownIcon className="h-6 w-6 text-gray-200" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
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
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
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
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    License
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                        onClick={logout}
                                    >

                                        Sign out
                                    </div>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}