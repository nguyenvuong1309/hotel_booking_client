




// import "./new.scss";
import Sidebar from "./sidebar";
import Navbar from "./../navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


const EditUser = ({ inputs, title }) => {
    const [data, setData] = useState(null);
    const { state } = useLocation();
    const id = state.id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/users/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                },);
                setData(res.data);
            } catch (err) {
                console.log("🚀 ~ file: UsersTable.jsx:17 ~ fetchData ~ err:", err)
            }
        };
        fetchData();
    }, []);
    inputs = [
        {
            id: "username",
            label: "Username",
            type: "text",
            value: data?.name,
        },
        {
            id: "email",
            label: "Email",
            type: "email",
            value: data?.email,
        },
        {
            id: "phone",
            label: "Phone",
            type: "text",
            value: "+1 234 567 89",
        },
        {
            id: "password",
            label: "Password",
            type: "password",
        },
        {
            id: "country",
            label: "Country",
            type: "text",
            value: "USA",
        },
        {
            id: "city",
            label: "City",
            type: "text",
            value: "USA",
        },
    ]


    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/lamadev/image/upload",
                data
            );

            const { url } = uploadRes.data;

            const newUser = {
                ...info,
                img: url,
            };

            await axios.post("/auth/register", newUser);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="">
            <Navbar />
            <div className="flex w-full">
                <Sidebar />

                <div className=" p-10 rounded-2xl">
                    {/* <div className="top">
                        <h1>{title}</h1>
                    </div> */}
                    <div className="flex bg-slate-500 ">
                        <div className="left w-96 h-96">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="bg-green-50">
                            <form className="flex gap-10">
                                <div className="formInput">
                                    <label htmlFor="file">
                                        {/* Image: <DriveFolderUploadOutlinedIcon className="icon" /> */}
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        style={{ display: "none" }}
                                    />
                                </div>

                                <div className="mt-10 grid items-center justify-center">
                                    <div className="grid grid-rows-2 grid-flow-col gap-4 w-10/12">
                                        {inputs && inputs.map((input) => (
                                            <div className="grid " key={input.id}>
                                                <label>{input.label}</label>
                                                <input className=""
                                                    onChange={handleChange}
                                                    type={input.type}
                                                    placeholder={input.value}
                                                    id={input.id}
                                                    value={input.value}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={handleClick} className="mt-10">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditUser;
