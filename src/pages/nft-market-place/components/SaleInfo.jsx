


import { ThirdwebNftMedia, Web3Button, useContract, useCreateDirectListing, useNFT } from "@thirdweb-dev/react";

import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Header from "./header";
import { useState } from "react";







const DirectFormData = {
    nftContractAddress: String,
    tokenId: String,
    price: String,
    startDate: Date,
    endDate: Date,
}
const SaleInfo = () => {
    //console.log("🚀 ~ file: SaleInfo.jsx:22 ~ SaleInfo ~ state:", state)
    const { contract: marketplace } = useContract(import.meta.env.VITE_MARKETPLACE_ADDRESS, "marketplace-v3");
    const { contract: nftCollection } = useContract(import.meta.env.VITE_MARKETPLACE_ADDRESS);
    const { mutateAsync: createDirectListing } = useCreateDirectListing(marketplace);


    const state = useLocation();
    const NFTId = state?.pathname.split('/')[3];

    const { contract } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const { data: nft, isLoading, error } = useNFT(contract, NFTId);


    async function checkAndProvideApproval() {
        const hasApproval = await nftCollection?.call(
            "isApprovedForAll",
            nft?.owner,
            import.meta.env.VITE_MARKETPLACE_ADDRESS
        );
        if (!hasApproval) {
            const txResult = await nftCollection?.call(
                "setApprovalForAll",
                import.meta.env.VITE_MARKETPLACE_ADDRESS,
                true
            );

            if (txResult) {
                console.log("Approval provided");
            }
        }

        return true;
    }

    const { register: registerDirect, handleSubmit: handleSubmitDirect } = useForm < DirectFormData > ({
        defaultValues: {
            nftContractAddress: import.meta.env.VITE_COLLECTION_ADDRESS,
            tokenId: nft?.metadata?.id,
            price: "0",
            startDate: new Date(),
            endDate: new Date(),
        },
    });

    const [assetContractAddress, setAssetContractAddress] = useState(null);
    const [tokenId, setTokenId] = useState(null);
    const [pricePerToken, setPricePerToken] = useState(null);
    const [startTimestamp, setStartTimestamp] = useState(null);
    const [endTimestamp, setEndTimestamp] = useState(null);

    async function handleSubmissionDirect() {
        await checkAndProvideApproval();
        console.log("🚀 ~ file: SaleInfo.jsx:70 ~ handleSubmissionDirect ~ DirectFormData:", DirectFormData)
        // const txResult = await createDirectListing({
        //     assetContractAddress: DirectFormData.nftContractAddress,
        //     tokenId: DirectFormData.tokenId,
        //     pricePerToken: DirectFormData.price,
        //     startTimestamp: new Date(DirectFormData.startDate),
        //     endTimestamp: new Date(DirectFormData.endDate),
        // });

        // return txResult;
    }


    return (
        <div>
            <div className="mt-5">
                <Header />
            </div>
            <div className="flex justify-center mt-10">
                <div className="w-[900px] h-[500px] flex">
                    <div className="w-1/2">
                        {!isLoading && <ThirdwebNftMedia
                            key={nft?.metadata?.id.toString()}
                            metadata={nft?.metadata}
                            height="90%"
                            width="90%"
                        />}
                    </div>
                    <div>
                        <div className="font-bold text-2xl">
                            Direct Listing :
                        </div>
                        <div className="flex gap-10 mt-10">
                            <div>
                                Start Date
                            </div>
                            <input type="date" placeholder="date" />
                        </div>
                        <div className="flex gap-10 mt-10">
                            <div>
                                End Date
                            </div>
                            <input type="date" placeholder="date" />
                        </div>
                        <div className="flex mt-10 justify-center items-center gap-10 mb-10">
                            <div>price</div>
                            <input type="text" />
                        </div>
                        <Web3Button
                            contractAddress={import.meta.env.VITE_MARKETPLACE_ADDRESS}
                            action={async () => {
                                await handleSubmissionDirect();
                            }}
                            onSuccess={(txResult) => {
                                console.log("🚀 ~ file: SaleInfo.jsx:124 ~ SaleInfo ~ txResult:", txResult)
                                // router.push(`/token/${import.]NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`);
                            }}
                        >Create Direct Listing</Web3Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SaleInfo;