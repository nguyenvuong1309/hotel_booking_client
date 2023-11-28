




import { MediaRenderer, ThirdwebNftMedia, Web3Button, useContract, useNFT, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import Header from "../components-for-NFT/header";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";




const AnNFTPage = () => {
    const { state } = useLocation();
    const tokenId = state?.id; // the tokenId to look up
    // const [nft, setNft] = useState(null);
    // const [isLoading, setIsLoading] = useState(null);
    const { contract } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const { data: nft, isLoading, error } = useNFT(contract, tokenId);
    const [contractMetaData, setContractMetaData] = useState(null);
    useEffect(() => {
        const getData = async () => {

            const data = await contract?.metadata?.get();
            setContractMetaData(data);
        }
        getData();
    }, [state?.id])



    const { contract: marketplace, isLoading: loadingMarketplace } =
        useContract(
            import.meta.env.VITE_MARKETPLACE_ADDRESS,
            "marketplace-v3"
        );
    const { contract: nftCollection } = useContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");


    const { data: directListing, isLoading: loadingDirectListing } =
        useValidDirectListings(marketplace, {
            tokenContract: import.meta.env.VITE_NFT_COLLECTION_ADDRESS,
            tokenId: nft?.metadata?.id,
        });



    const { data: auctionListing, isLoading: loadingAuction } =
        useValidEnglishAuctions(marketplace, {
            tokenContract: import.meta.env.VITE_NFT_COLLECTION_ADDRESS,
            tokenId: nft?.metadata?.id,
        });

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
        <div className="grid">
            <div className="my-10">
                <Header />
            </div>
            <div className="flex gap-10">
                <div className="flex w-2/12"></div>
                <div className="flex w-9/12 h-96">
                    <div className="grid w-4/10 h-[600px] w-full justify-center items-center">
                        <div className="">
                            <div className="justify-center items-center">
                                {!isLoading && (<ThirdwebNftMedia
                                    key={nft?.metadata?.id.toString()}
                                    metadata={nft?.metadata}
                                    width="90%"
                                    height="90%"
                                    right="0px"
                                //style={{ width: 500 }}

                                />)}
                            </div>
                            <div className="mt-10">
                                <div className="font-bold">
                                    Description :
                                </div>
                                <div className="">
                                    {nft?.metadata?.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/10 w-full h-[600px]">
                        <div className="m-10">
                            <div className="flex gap-5 items-center">
                                <div className=" rounded-md overflow-hidden">
                                    <MediaRenderer
                                        src={contractMetaData?.image}
                                        width="50px"
                                        height="50px"
                                    />
                                </div>
                                <div className="font-bold">
                                    {contractMetaData?.name}
                                </div>
                            </div>
                            <div className="font-bold text-3xl mt-5">
                                {nft?.metadata?.name}
                            </div>
                            <div className="flex items-center gap-2 mt-5">
                                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-slate-100">
                                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <Link to={`/profile/${nft?.owner}`}>
                                    {nft?.owner}
                                </Link>
                            </div>
                            <div>
                                {directListing && directListing[0] ? (
                                    <div>
                                        <div className="w-full bg-slate-300 px-3 rounded-md">
                                            <div className="mb-2 mt-5">
                                                Price :
                                            </div>
                                            <div className="mb-10 font-bold text-2xl">
                                                {directListing[0]?.currencyValuePerToken.displayValue}
                                                {" " + directListing[0]?.currencyValuePerToken.symbol}
                                            </div>
                                        </div>
                                        <Web3Button
                                            contractAddress="0x39798cAF83acCCACcC8b9BBC6158859E1330904D"
                                            action={async () => buyListing()} // Logic to execute when clicked
                                            style={{ color: "black" }}
                                        >
                                            Buy
                                        </Web3Button>
                                    </div>
                                ) : (
                                    nft?.owner != "0x0000000000000000000000000000000000000000" ? (
                                        <div className="mb-10 font-bold text-2xl mt-5">
                                            Not listed
                                        </div>
                                    ) : (
                                        <div className="mb-10 font-bold text-2xl mt-5">
                                            Not claimed
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/12"></div>
            </div>
        </div >
    )
}

export default AnNFTPage;