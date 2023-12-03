import FlightDropdDown from "./DropDown/FlightDropDown";
import TransportDropDown from "./DropDown/TransportDropDown";
import RentalCarDropDown from "./DropDown/RentalCarDropDown";





export default function HeaderList() {
    return (
        <div>
            <div className="flex mt-10 mb-10 justify-center gap-5 flex-wrap">
                {/* <div className="flex gap-2 bg-slate-500 rounded-full items-center justify-center px-4">
                    <svg className="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="5" cy="18" r="3" />
                        <circle cx="19" cy="18" r="3" />
                        <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                        <circle cx="17" cy="5" r="1" />
                    </svg>
                </div> */}
                <div>
                    <RentalCarDropDown />
                </div>
                <div>
                    <FlightDropdDown />
                </div>
                <div >
                    <TransportDropDown />
                </div>
            </div>
        </div>
    );
}