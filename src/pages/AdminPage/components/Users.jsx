import Navbar from './../navbar/Navbar';
import UsersTable from "./UsersTable";

import Sidebar from "./sidebar";




export default function Users() {
    return (
        <div className="grid">
            <Navbar />
            <div className="flex">
                <Sidebar />

                <div className="bg-green-50 w-10/12">
                    <div className="flex items-center p-10">
                        <UsersTable />
                    </div>
                </div>
            </div>
        </div>
    )
}