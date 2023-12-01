import axios from "axios";
import { useState } from "react";





function CreateCarPage() {
    const [carData, setCarData] = useState({
        name: String,
        from: String,
        to: String,
        departureTime: String,
        estimatedTimeOfArrival: String,
        numberRemain: Number,
        price: Number,
        images: [String],
        description: String
    });
    const CreateCar = async () => {
        const response = await axios.post("/createCar", carData);
    }
    return (
        <div>
            <div className="flex justify-center">Create car page</div>
            <div className="flex justify-center">
                <div className="w-11/12">
                    <div>
                        <div>Car Name</div>
                        <input type="text" value={carData.name} onChange={(ev) => { setCarData({ ...carData, name: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>From</div>
                        <input type="text" value={carData.from} onChange={(ev) => { setCarData({ ...carData, from: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>To</div>
                        <input type="text" value={carData.to} onChange={(ev) => { setCarData({ ...carData, to: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>departureTime</div>
                        <input type="text" value={carData.departureTime} onChange={(ev) => { setCarData({ ...carData, departureTime: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>estimatedTimeOfArrival</div>
                        <input type="text" value={carData.estimatedTimeOfArrival} onChange={(ev) => { setCarData({ ...carData, estimatedTimeOfArrival: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>images</div>
                        <img src={carData.images || ""} alt="" />
                        <input type="text" value={carData.images} onChange={(ev) => { setCarData({ ...carData, images: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>Number seat</div>
                        <input type="text" value={carData.numberRemain} onChange={(ev) => { setCarData({ ...carData, numberRemain: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>price</div>
                        <input type="text" value={carData.price} onChange={(ev) => { setCarData({ ...carData, price: ev.target.value }) }} />
                    </div>
                    <div>
                        <div>description</div>
                        <input type="text" value={carData.description} onChange={(ev) => { setCarData({ ...carData, description: ev.target.value }) }} />
                    </div>
                    <div className="flex justify-center" onClick={CreateCar}>
                        <button>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreateCarPage;


