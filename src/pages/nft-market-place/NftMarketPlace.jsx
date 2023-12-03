



import { ConnectWallet, ThirdwebNftMedia, useAddress, useContract, useContractRead, useContractWrite, useNFTs } from "@thirdweb-dev/react";
import Header from "./components-for-NFT/header";
import NFTItem from "./components-for-NFT/NFTItem";
import { Link } from "react-router-dom";
import ButtonBurnAnNFT from "./components-for-NFT/ButtonBurnAnNFT";

const contractAddress = "0x39798cAF83acCCACcC8b9BBC6158859E1330904D"
//const ownerAddress = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53"
export default function NftMarketPlace() {

    const { contract } = useContract(contractAddress);
    const ownerAddress = useAddress();

    const { data: nfts, isLoading, error } = useNFTs(contract);
    console.log("🚀 ~ file: NftMarketPlace.jsx:19 ~ NftMarketPlace ~ nfts:", nfts)
    const { data: contractName } = useContractRead(contract, 'name')


    const handleBurnNFT = async (id) => {
        const result = await contract.erc721.burn(id);
    }
    const CheckNumberOfNFT = () => {
        let count = 0;
        nfts?.map((nft) => (
            nft?.owner == ownerAddress ? count = count + 1 : count
        ))
        return count
    }
    return (
        <div className="mb-96">
            <div className="mt-5">
                <Header />
            </div>
            <div className="flex justify-center items-center mt-10 mb-10">
                <Link to={"/nft-market-place/mint-NFT"} className="flex justify-center items-center w-32 h-10 font-bold bg-purple-400 rounded-3xl">
                    Mint an NFT
                </Link>
            </div>
            {
                <div className="flex justify-center">
                    {
                        ownerAddress ? (
                            CheckNumberOfNFT() === 0 ? (
                                <div>
                                    <div className="flex items-center justify-center font-bold mb-10">
                                        Don't have any NFT
                                    </div>
                                    <Link to={"/nft-market-place/buy"} className=" bg-slate-400 flex rounded-sm items-center justify-center">
                                        Go to market place
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid gap-10 grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                                    {isLoading ? (
                                        <div>Loading...</div>
                                    ) : (
                                        nfts.map((nft) => (
                                            nft?.owner == ownerAddress && (
                                                <NFTItem nft={nft} key={nft?.id} />
                                            )
                                        ))
                                    )}
                                </div>
                            )
                        ) : (
                            <div className="flex items-center justify-center font-bold">
                                Login to view and buy NFT
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}