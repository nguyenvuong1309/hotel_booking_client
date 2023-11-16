


// import "./featured.scss";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
    return (
        <div className="h-full">
            <div className="mt-5">
                <h1 className="mt-5">Total Revenue</h1>
                <div className="flex justify-center w-full h-20 p-1">
                    <svg fill="#30c07d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 607.07 607.07" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M303.538,607.07c29.983,0,58.786-4.981,85.718-14.042L263.141,302.634c-57.356-50.447-156.089-137.341-161.286-142.333 c-41.86,47.401-67.238,109.668-67.238,177.849C34.616,486.641,155.046,607.07,303.538,607.07z"></path> <path d="M86.598,74.578l167.64,149.165V0C178.79,0,115.959,31.121,86.598,74.578z"></path> <path d="M303.538,69.232v211.671l127.664,293.961c84.103-45.465,141.253-134.425,141.253-236.715 C572.454,189.663,452.028,69.232,303.538,69.232z"></path> </g> </g> </g>
                    </svg>
                </div>
                {/* <MoreVertIcon fontSize="small" /> */}
            </div>
            <div className="">
                <div className="">
                    {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
                </div>
                <p className="flex justify-center">Total sales made today</p>
                <p className="flex justify-center text-2xl font-semibold">$420</p>
                <p className="flex justify-center text-xs mt-10">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="flex justify-around mt-10">
                    <div className="">
                        <div className="flex justify-center">Target</div>
                        <div className="flex justify-center gap-5 mt-5">
                            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>

                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center">Last Week</div>
                        <div className="flex justify-center gap-5 mt-5">
                            <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center">Last Month</div>
                        <div className="flex justify-center gap-5 mt-5">
                            <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;





