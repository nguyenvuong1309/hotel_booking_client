import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import Header from "../components/header";
import { useState } from "react";
import NFTItem from "../components/NFTItem";







const SellPage = () => {
    const { contract } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);
    console.log("🚀 ~ file: SellPage.jsx:15 ~ SellPage ~ data:", data)
    return (
        <div>
            <div className="mt-5">
                <Header />
            </div>
            <div className="flex font-medium justify-center m-5 text-2xl">
                Sell Page
            </div>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10  grid-cols-5 ">
                <NFTItem nft={data?.[0]} />
            </div> */}
            <div className="flex justify-center">
                <div className="grid gap-10 grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                    {!isLoading && (
                        data.map((nft) => (
                            <NFTItem nft={nft} key={nft?.metadata?.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default SellPage;