



import { ConnectWallet, ThirdwebNftMedia, useAddress, useContract, useContractRead, useContractWrite, useNFTs } from "@thirdweb-dev/react";
import Header from "./components/header";
import NFTItem from "./components/NFTItem";
import { Link } from "react-router-dom";
import ButtonBurnAnNFT from "./components/ButtonBurnAnNFT";

const contractAddress = "0x39798cAF83acCCACcC8b9BBC6158859E1330904D"
//const ownerAddress = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53"
export default function NftMarketPlace() {

    const { contract } = useContract(contractAddress);
    const ownerAddress = useAddress();
    console.log("🚀 ~ file: NftMarketPlace.jsx:17 ~ NftMarketPlace ~ address:", ownerAddress)

    const { data: nfts, isLoading, error } = useNFTs(contract);
    console.log("🚀 ~ file: NftMarketPlace.jsx:20 ~ NftMarketPlace ~ nfts:", nfts)
    const { data: contractName } = useContractRead(contract, 'name')


    const handleBurnNFT = async (id) => {
        const result = await contract.erc721.burn(id);
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
                    <div className="grid gap-10 grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                        {
                            isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                nfts.map((nft) => (
                                    nft?.owner == ownerAddress && (

                                        //  <Link to={`/nft-market-place/${nft?.metadata?.id}`} state={{ id: nft?.metadata?.id }} className="grid bg-slate-300 rounded justify-center" key={nft?.metadata?.id} >
                                        <NFTItem nft={nft} key={nft?.id} />
                                        //     <div className="flex justify-around items-center">
                                        //         <div className="flex h-20 justify-center items-center font-bold">
                                        //             {nft.metadata.name}
                                        //         </div>
                                        //         <ButtonBurnAnNFT id={nft?.metadata?.id} />
                                        //     </div>
                                        // </Link>
                                    )
                                ))
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}