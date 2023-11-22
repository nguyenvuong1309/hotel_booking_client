
import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Web3Button, useAddress, useContract, useLazyMint, useMintNFT } from "@thirdweb-dev/react";
import Button_min_NFT from "../components-for-NFT/Button_mint_NFT";
import Header from "../components-for-NFT/header";
import ClaimAnNFT from "../components-for-NFT/ClaimAnNFT";





const MintNFTPage = () => {
    const address = useAddress();
    const [name, setName] = useState("Soldier ape");
    const [image, setImage] = useState("This is a cool NFT sodlier ape");
    const [description, setDescription] = useState("https://i.seadn.io/gae/mxCaw5HKuOhjdvE8nl-_TjEkFCAk8gGiYAk8LQ6WEayPLJ0s0TqSerbJoLrRsKk_p9AylO95nLiuo2vxo3g5nBHvR2Vof6VwhpZOeA?auto=format&dpr=1&w=384");

    const { contract2 } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract2);



    return (
        <div className="mb-96">
            <div className="mt-10">
                <Header />
            </div>
            <div className="grid justify-center items-center mt-10">
                <div className="font-bold flex items-center justify-center mb-10">Mint NFT Page</div>
                <div>
                    <input value={name} onChange={(ev) => { setName(ev.target.value) }} type="text" placeholder="Name NFT" />
                    <input value={description} onChange={(ev) => { setDescription(ev.target.value) }} type="text" placeholder="description" />
                    <div className="">
                        <img src={image} alt="" />
                    </div>
                    <input value={image} onChange={(ev) => { setImage(ev.target.value) }} type="text" placeholder="link image" />
                </div>
                <div className="flex items-center justify-center mt-10">
                    <Button_min_NFT name={name} description={description} image={image} />
                </div>
                <div className="flex items-center justify-center mt-10">
                    <ClaimAnNFT />
                </div>
            </div>
        </div>
    )
}

export default MintNFTPage;