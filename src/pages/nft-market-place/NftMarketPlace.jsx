



import { ConnectWallet, ThirdwebNftMedia, useContract, useContractRead, useContractWrite, useNFTs } from "@thirdweb-dev/react";
import Header from "./components/header";
import NFTItem from "./components/NFTItem";
import { Link } from "react-router-dom";
import ButtonBurnAnNFT from "./components/ButtonBurnAnNFT";

const contractAddress = "0x882E5e76D12ba94983D0813946DE4738C2691A21"
const ownerAddress = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53"
export default function NftMarketPlace() {

    const { contract } = useContract(contractAddress);

    const { data: nfts, isLoading, error } = useNFTs(contract);
    console.log("🚀 ~ file: NftMarketPlace.jsx:16 ~ NftMarketPlace ~ nfts:", nfts)
    const { data: contractName } = useContractRead(contract, 'name')


    const handleBurnNFT = async (id) => {
        console.log("🚀 ~ file: NftMarketPlace.jsx:18 ~ handleBurnNFT ~ id:", id)
        const result = await contract.erc721.burn(id);
        console.log("🚀 ~ file: NftMarketPlace.jsx:20 ~ handleBurnNFT ~ result:", result)
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
                                    console.log("🚀 ~ file: NftMarketPlace.jsx:42 ~ NftMarketPlace ~ nft.metadata.owner == ownerAddress:", nft?.owner, ownerAddress),
                                    nft?.owner == ownerAddress && (

                                        <div className="grid bg-slate-300 rounded justify-center" key={nft?.metadata?.id}>
                                            <NFTItem nft={nft} />
                                            <div className="flex justify-around items-center">
                                                <div className="flex h-20 justify-center items-center font-bold">
                                                    {nft.metadata.name}
                                                </div>
                                                {/* <button
            className="flex  justify-center items-center bg-purple-300 w-16 h-8 rounded-3xl"
            onClick={() => { handleBurnNFT(nft?.metadata?.id) }}
        >
            burn
        </button> */}
                                                <ButtonBurnAnNFT id={nft?.metadata?.id} />
                                            </div>
                                        </div>
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