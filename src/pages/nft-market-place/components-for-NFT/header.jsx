


// import { ReactComponent as avocado_nft } from './avocado_nft.svg'

import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";





const Header = () => {
    const state = useLocation();
    const pathname = state.pathname.split('/')[2];
    const [onPage, setOnPage] = useState("");
    useEffect(() => {
        setOnPage(pathname);
    }, [])
    return (
      <div>
        <div className="flex items-center  justify-around">
          <div>
            <Link
              to={"/nft-market-place"}
              className="flex justify-center items-center font-bold text-2xl gap-2"
            >
              <div className="w-10">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M441 936c-121.3-7.36-233.43-93.59-233.43-231.07q0-85.27 52.84-185.15c21.77-37.43 50.7-85.12 66-146 11.13-44.34 17.88-87.16 20.39-124.86 5.24-73.71 44.29-133 94.21-144v-3.32a152.49 152.49 0 0 1 56.34-10.88c87.39 0 156 57.1 164.2 139 4.42 37.71 36.82 123.45 53.66 167.79 23.12 60.89 43.1 93.63 76 131.06q59.37 87.55 59.37 167.25c0 143.84-103.36 259.51-409.58 243.57V936z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M441 926.68a279 279 0 0 0 73.24 9.78c127.57 0 235.61-87.73 235.61-231.58q0-76.52-55.24-169.29c-21.77-37.43-54.38-101-69.66-161.87a756.52 756.52 0 0 1-20.17-124.86C599.36 167 572 103 514.24 103c-28 0-53.64-7.86-73.24 17v-18.4a152.49 152.49 0 0 1 56.34-10.88c87.39 0 156 57.1 164.2 139 4.42 37.71 36.82 123.45 53.66 167.79 23.12 60.89 43.1 93.63 76 131.06q59.37 87.55 59.37 167.25c0 143.84-103.36 259.51-409.58 243.57z"
                      fill="#55AB1F"
                    ></path>
                    <path
                      d="M491.54 934.39c-114.55-14-216.37-98.5-216.37-229.5q0-85.27 52.84-185.15c21.77-37.43 50.7-85.12 66-146 11.13-44.34 17.88-87.16 20.39-124.86 4.59-64.55 35.11-118 76.15-137.71 35.72 19.71 53.62 73.16 57.89 137.71a756.52 756.52 0 0 0 20.17 124.86c15.29 60.89 47.89 124.44 69.66 161.87q55.24 92.77 55.24 169.29c0 130.99-89.61 215.45-201.97 229.49z"
                      fill="#EBFFB9"
                    ></path>
                    <path
                      d="M496.61 958.31q-27.39 0-56.67-1.52l2.13-40.9c82.64 4.31 153.49-0.86 210.58-15.35 51.05-13 91.67-33.51 120.73-61.1 37.62-35.75 56.72-84.08 56.72-143.68 0-48.41-18.55-100.45-55.14-154.71-35.4-40.44-56.12-76.28-78.92-136.33C670 336.22 645.4 267.9 641.2 232v-0.35c-7.1-71-66.24-120.51-143.82-120.51-17.66 0-35.35 6.11-48.79 11.44l-15.14-38.02c16.83-6.67 39.29-14.32 63.89-14.32 47.22 0 91.61 15.48 125 43.59 33.89 28.54 55 68.88 59.56 113.61 4.27 35.86 38 124.75 52.44 162.74 21.3 56.12 39.54 87.61 72.25 124.8l0.85 1 0.72 1.06c41.74 61.55 62.9 121.69 62.9 178.75 0 71.27-23.38 129.6-69.49 173.37-62.42 59.23-164.86 89.15-304.96 89.15z"
                      fill=""
                    ></path>
                    <path
                      d="M457.9 956.95a297 297 0 0 1-99.8-17.14 273 273 0 0 1-86.53-49.63 239.73 239.73 0 0 1-61.34-79.64c-15.36-32.37-23.15-67.92-23.15-105.65 0-60 18.58-125.47 55.22-194.72l0.4-0.72 3.48-6c20.75-35.57 46.57-79.83 60.35-134.72 10.46-41.65 17.31-83.57 19.82-121.24 6.69-94.09 63.24-165 131.55-165 34.79 0 63.41 18.22 82.77 52.68 15.61 27.8 25.1 65.54 28.2 112.18a732.8 732.8 0 0 0 19.61 121.35C604.6 433 641 499.51 655.92 525.22 694.45 590 714 650.4 714 704.89c0 37.65-6.9 72.95-20.51 104.9a232.8 232.8 0 0 1-56 79.84C590.76 933 527 956.95 457.9 956.95zM278.31 529.69C245 592.84 228 651.78 228 704.89c0 77.79 38.16 126.78 70.17 154.17C340.48 895.24 398.69 916 457.9 916c58.71 0 112.58-20 151.7-56.37 41.5-38.57 63.4-92.07 63.4-154.74 0-47-17.62-100.46-52.36-158.81l-0.11-0.18c-19.62-33.72-55-100.28-71.82-167.18A774 774 0 0 1 528 250.45v-0.23c-2.64-40-10.61-72.81-23-94.94-17.85-31.78-39.83-31.78-47.05-31.78-45.79 0-85.63 55.71-90.68 126.83-2.67 40-9.91 84.41-21 128.4-15.2 60.53-42.64 107.58-64.69 145.38z"
                      fill=""
                    ></path>
                    <path
                      d="M317.05 688.69a123.95 123.89 0 1 0 247.9 0 123.95 123.89 0 1 0-247.9 0Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M512.58 587.54a123.89 123.89 0 0 1-64.29 224.84 123.89 123.89 0 0 1 64.29-224.84z"
                      fill="#FFB000"
                    ></path>
                    <path
                      d="M441 833.06c-79.64 0-144.43-64.77-144.43-144.37S361.36 544.32 441 544.32s144.43 64.77 144.43 144.37S520.64 833.06 441 833.06z m0-247.78a103.41 103.41 0 1 0 103.47 103.41A103.56 103.56 0 0 0 441 585.28z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </div>
              <div>Avocado</div>
            </Link>
            <Link to={"/"} className="underline underline-offset-4">
              <p className="mt-3">Hotel Booking</p>
            </Link>
          </div>
          <div className="flex gap-4">
            <div
              className={
                onPage?.toString() == "buy"
                  ? " bg-purple-100 py-1 px-2 rounded-xl flex justify-center items-center w-fit h-fit"
                  : " py-1 px-2 rounded-xl flex justify-center items-center bg-white w-fit h-fit"
              }
            >
              <Link to={"/nft-market-place/buy"}>buy</Link>
            </div>
            <div
              className={
                onPage?.toString() == "sell"
                  ? " bg-purple-100 py-1 px-2 rounded-xl flex justify-center items-center w-fit h-fit"
                  : " py-1 px-2 rounded-xl flex justify-center items-center bg-white w-fit h-fit"
              }
            >
              <Link to={"/nft-market-place/sell"}>sell</Link>
            </div>
            <div
              className={
                onPage?.toString() == "transfer-token"
                  ? " bg-purple-100 py-1 px-2 rounded-xl flex justify-center items-center w-fit h-fit"
                  : " py-1 px-2 rounded-xl flex justify-center items-center bg-white w-fit h-fit"
              }
            >
              <Link to={"/nft-market-place/transfer-token"}>
                transfer token
              </Link>
            </div>
          </div>
          <div className="right-5">
            <ConnectWallet btnTitle="Login" />
          </div>
        </div>
      </div>
    );
}


export default Header;