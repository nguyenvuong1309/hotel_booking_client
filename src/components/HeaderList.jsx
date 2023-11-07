

export default function HeaderList() {
    return (
        <div className=" flex mt-10 mb-10 justify-center gap-5">
            <div className="flex gap-2 bg-slate-500 rounded-full items-center">
                <svg className="h-7 w-7 text-black ml-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="5" cy="18" r="3" />
                    <circle cx="19" cy="18" r="3" />
                    <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                    <circle cx="17" cy="5" r="1" />
                </svg>
                <div className="mr-2 text-center flex items-center justify-center">
                    rental car
                </div>
            </div>
            <div className="flex gap-2 bg-slate-500 rounded-full items-center">
                <svg className="h-7 w-7 text-black ml-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2-4l-2 -4h3l2 2h4l-2 -7h3z" />
                </svg>
                <div className="mr-2">
                    fight
                </div>
            </div>
            <div className="flex gap-2 bg-slate-500 rounded-full items-center">
                <svg className="h-7 w-7 text-black ml-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>
                <div className="mr-2">
                    airport taxi
                </div>
            </div>
        </div>
    );
}