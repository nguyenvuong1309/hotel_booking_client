

import axios from "axios";
import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

axios.defaults.withCredentials = true;
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  axios.defaults.withCredentials = true;
  const captchaRef = useRef(null);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    const token = captchaRef.current.getValue();
    try {
      // const data = await axios.post('/login', { email, password });
      // setUser(data.data)
      // setRedirect(true)
      await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ token, email, password }),
        headers: {
          "Content-Type": "application/json",
          //  Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result?.token) {
            //localStorage.setItem('token', result.token)
            localStorage.setItem("user:token", result.token);
            localStorage.setItem("user:detail", JSON.stringify(result.user));

            axios
              .get("/profile", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("user:token"),
                },
              })
              .then(({ data }) => {
                setUser(data);
              });

            // setUser(result.userInfo);
            setRedirect(true);
            toast.success("Login sucess");
          } else {
            toast.error("Wrong credentials");
          }
        });
      // if (response) {
      //     response.json().then(userInfo => {
      //         setUser(userInfo);
      //         setRedirect(true);
      //     })
      //     toast.success("Login sucess");
      // } else {
      //     toast.error("Wrong credentials");
      // }
    } catch (e) {
      console.log(e);
      toast.error("Login failed");
    }
    captchaRef.current.reset();
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form
            id="demo-form"
            className="flex justify-center"
            onSubmit={handleLoginSubmit}
          >
            <div className="w-11/12">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                ref={captchaRef}
              />
              {/* sitekey={"6Lf7gOQpAAAAAHMNsfRnYt_GDqv3"}
                ref={captchaRef}
              /> */}
              <button className="primary">Login</button>
              <div className="text-center py-2 text-gray-500">
                Don't have an account yet ?
                <Link className="underline text-bn" to={"/register"}>
                  Register now
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}