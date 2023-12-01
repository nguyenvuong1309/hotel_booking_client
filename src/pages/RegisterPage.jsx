

import { Link, NavLink, Navigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function RegisterUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
                fullName
            });
            setRedirect(true)
            toast.success('Registration successful. Now you can log in')
        }
        catch (e) {
            toast.error('Registration failed. Please try again later');
        }
    }


    if (redirect) {
        return <Navigate to={'/'} />
    }



    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="flex justify-center" onSubmit={RegisterUser}>
                    <div className="w-11/12">
                        <input type="text" placeholder='Vuong'
                            value={name}
                            onChange={ev => setName(ev.target.value)}
                        />
                        <input type="text" placeholder='Vuong'
                            value={fullName}
                            onChange={ev => setFullName(ev.target.value)}
                        />
                        <input type="email" placeholder='your@email.com'
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                        />
                        <input type="password" placeholder="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        />

                        <NavLink to={"/"} exact
                            className=""
                            activeStyle={{ color: 'white' }}
                            onClick={RegisterUser}
                        >
                            {/* <button className="primary">Register</button> */}
                            <div className="flex justify-center p-5 m-5">
                                <div className="w-1/6 bg-red-500 rounded-3xl flex justify-center mt-5 text-white p-2">
                                    Register
                                </div>
                            </div>
                        </NavLink>
                        <div className="text-center py-2 text-gray-500">
                            Already a member
                            <Link className="underline text-bn" to={'/login'}>Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}