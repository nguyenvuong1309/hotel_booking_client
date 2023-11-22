


import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfilePage({ user, setUser }) {
    async function logout() {
        await axios.post("/logout");
        toast.success("Logout success");
        setUser(null);
        setRedirect('/');
    }
    return (
        <>
            <div className="text-center max-w-lg mx-auto items-center justify-center">
                <div className=" flex justify-center gap-10 text-xl">
                    <div>
                        <div className="flex">
                            <div className="flex m-0">Name</div>
                        </div>
                        <div className="flex">
                            <div>Email</div>
                        </div>
                        <div className="flex">
                            <div>Phone number</div>
                        </div>
                        <div className="flex">
                            <div>city</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex ">
                            <div>{user?.name}</div>
                        </div>
                        <div className="flex">
                            <div>{user?.email}</div>
                        </div>
                        <div className="flex justify-around">
                            <div>{ }</div>
                        </div>
                        <div className="flex justify-around">
                            <div>{ }</div>
                        </div>
                    </div>
                </div>
                <button onClick={logout} className="primary max-w-sn mt-2">Logout</button>
            </div>
        </>
    )
}