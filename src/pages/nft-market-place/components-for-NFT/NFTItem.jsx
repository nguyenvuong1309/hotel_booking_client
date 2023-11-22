import { ThirdwebNftMedia, useContract, useValidDirectListings } from "@thirdweb-dev/react";
import { Link, useLocation } from "react-router-dom";
import ButtonBurnAnNFT from "./ButtonBurnAnNFT";






const NFTItem = ({ nft }) => {
    const state = useLocation();
    const nameId = state?.pathname.split('/')[2]

    const { contract: marketplace, isLoading: loadingMarketplace } =
        useContract(
            import.meta.env.VITE_MARKETPLACE_ADDRESS,
            "marketplace-v3"
        );

    const { data: directListing, isLoading: loadingDirectListing } =
        useValidDirectListings(marketplace, {
            tokenContract: import.meta.env.VITE_NFT_COLLECTION_ADDRESS,
            tokenId: nft?.metadata?.id,
        });

    return (
        <div >
            <Link to={nameId == "sell" ? (`/nft-market-place/SaleInfo/${nft?.metadata?.id}`) : `/nft-market-place/${nft?.metadata?.id}`} state={{ id: nft?.metadata?.id }} className="grid bg-slate-300 rounded-xl justify-center" key={nft?.metadata?.id} >
                <ThirdwebNftMedia
                    key={nft?.metadata?.id.toString()}
                    metadata={nft?.metadata}
                    className="rounded-xl"
                // style={{ width: 200 }}
                // className="w-[230px] h-[250px] object-fill p-4"
                />
                <div className=" bg-slate-100 m-1 p-1 rounded-xl">
                    <div className="flex justify-around items-center">
                        <div className="flex h-10 justify-center items-center font-bold">
                            {nft?.metadata?.name}
                        </div>
                        <ButtonBurnAnNFT
                        //   id={nft?.metadata?.id} 
                        />
                    </div>
                    <div>
                        <div className="">
                            {directListing && directListing[0] ? (
                                <div className="w-full bg-slate-300 px-3 rounded-md mb-7">
                                    <div className="mb-2">
                                        Price :
                                    </div>
                                    <div className="font-bold text-2xl">
                                        {directListing[0]?.currencyValuePerToken.displayValue}
                                        {" " + directListing[0]?.currencyValuePerToken.symbol}
                                    </div>
                                </div>

                            ) : (
                                <>
                                    {
                                        nft?.owner != "0x0000000000000000000000000000000000000000" ? (
                                            <div className="mb-10 font-bold text-2xl mt-5">
                                                Not listed
                                            </div>
                                        ) : (
                                            <div className="mb-10 font-bold text-2xl mt-5">
                                                Not claimed
                                            </div>
                                        )
                                    }
                                </>
                            )}
                        </div>
                        <div></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default NFTItem;