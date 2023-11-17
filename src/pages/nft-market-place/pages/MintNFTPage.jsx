
import { useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Web3Button, useContract } from "@thirdweb-dev/react";





const MintNFTPage = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");


    const { contract } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);


    return (
        <div className="grid justify-center items-center mt-10">
            <div className="font-bold flex items-center justify-center mb-10">Mint NFT Page</div>
            <div>
                <input value={name} onChange={(ev) => { setName(ev.target.value) }} type="text" placeholder="Name NFT" />
                <input value={description} onChange={(ev) => { setDescription(ev.target.value) }} type="text" placeholder="description" />
                <input value={image} onChange={(ev) => { setImage(ev.target.value) }} type="text" placeholder="link image" />
            </div>
            <div className="flex items-center justify-center mt-10">
                {/* <button className="w-20 bg-purple-400 rounded-3xl font-semibold" onClick={MintNFT}>
                    Mint
                </button> */}
                <Web3Button
                    contractAddress={import.meta.env.VITE_NFT_COLLECTION_ADDRESS}
                    className="flex bg-purple-400 rounded-3xl font-semibold"
                    action={(contract) => {
                        contract.erc721.mint({
                            name: name,
                            description: description,
                            image: image
                        })
                    }}>
                    Mint
                </Web3Button>
            </div>
        </div>
    )
}

export default MintNFTPage;