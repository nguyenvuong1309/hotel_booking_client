import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { Link, useLocation } from "react-router-dom";
import ButtonBurnAnNFT from "./ButtonBurnAnNFT";






const NFTItem = ({ nft }) => {
    const state = useLocation();
    const nameId = state?.pathname.split('/')[2]
    console.log("🚀 ~ file: NFTItem.jsx:13 ~ NFTItem ~ nameId:", nameId)
    console.log("🚀 ~ file: NFTItem.jsx:12 ~ NFTItem ~ state:", state)
    return (
        <div >
            <Link to={nameId == "sell" ? (`/nft-market-place/SaleInfo/${nft?.metadata?.id}`) : `/nft-market-place/${nft?.metadata?.id}`} state={{ id: nft?.metadata?.id }} className="grid bg-slate-300 rounded justify-center" key={nft?.metadata?.id} >
                <ThirdwebNftMedia
                    key={nft?.metadata?.id.toString()}
                    metadata={nft?.metadata}
                    // style={{ width: 200 }}
                    className="w-[230px] h-[250px] object-fill p-4"
                />
                <div className="flex justify-around items-center">
                    <div className="flex h-20 justify-center items-center font-bold">
                        {nft?.metadata?.name}
                    </div>
                    <ButtonBurnAnNFT
                    //   id={nft?.metadata?.id} 
                    />
                </div>
            </Link>
        </div>
    )
}
export default NFTItem;