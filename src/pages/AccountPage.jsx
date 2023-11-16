import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage.jsx";
import AccountNav from "../AccountNav.jsx";
import ProfilePage from "./ProfilePage.jsx";



export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    let { subpage } = useParams();

    if (subpage == undefined) {
        subpage = 'profile';
    }

    const { ready, user, setUser, setReady } = useContext(UserContext)
    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }





    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <ProfilePage user={user} setUser={setUser} />
            )}
            {subpage === 'places' && (
                <div className="">
                    <PlacesPage />
                </div>
            )}
        </div>
    );
}