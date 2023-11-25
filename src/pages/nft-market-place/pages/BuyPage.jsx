




import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MediaRenderer, ThirdwebNftMedia, Web3Button, useContract, useNFT, useNFTs, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import Header from "../components-for-NFT/header";
import NFTItem from "../components-for-NFT/NFTItem";

const BuyPage = () => {

    const { contract } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const { data: nfts, isLoading, error } = useNFTs(contract);

    const { contract: marketplace, isLoading: loadingMarketplace } =
        useContract(
            import.meta.env.VITE_MARKETPLACE_ADDRESS,
            "marketplace-v3"
        );
    const { contract: nftCollection } = useContract(import.meta.env.VITE_MARKETPLACE_ADDRESS);


    const { data: directListing, isLoading: loadingDirectListing } =
        useValidDirectListings(marketplace, {
            tokenContract: import.meta.env.VITE_NFT_COLLECTION_ADDRESS,
            tokenId: nftCollection?.metadata?.id,
        });




    const [bidValue, setBidValue] = useState(null);
    // const { data: auctionListing, isLoading: loadingAuction } =
    //     useValidEnglishAuctions(marketplace, {
    //         tokenContract: import.meta.env.VITE_NFT_COLLECTION_ADDRESS,
    //         tokenId: nft?.metadata?.id,
    //     });

    const buyListing = async () => {
        let txResult;
        if (auctionListing?.[0]) {
            txResult = await marketplace?.englishAuctions.buyoutAuction(
                auctionListing[0].id
            );
        } else if (directListing?.[0]) {
            txResult = await marketplace?.directListings.buyFromListing(
                directListing[0].id,
                1
            );
        } else {
            throw new Error("No listing found");
        }

        return txResult;
    }


    return (
        <div className="mb-96">
            <div className="mt-5">
                <Header />
            </div>
            <div className="grid justify-center items-center font-medium text-2xl">
                <div className="flex justify-center m-4">Buy NFTs</div>
                <div>Browse and buy NFTs from this collection.</div>
            </div>
            <div className="flex justify-center">
                <div className="grid gap-10 grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                    {
                        isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            nfts.map((nft) =>
                            (
                                <NFTItem nft={nft} key={nft?.id} />
                            )
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default BuyPage;