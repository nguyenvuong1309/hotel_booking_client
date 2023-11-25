


import { ThirdwebNftMedia, Web3Button, useContract, useContractRead, useCreateDirectListing, useNFT } from "@thirdweb-dev/react";

import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Header from "./header";
import { useState } from "react";
import ButtonCreateDirectListing from "./ButtonCreateDirectListing";







const DirectFormData = {
    nftContractAddress: String,
    tokenId: String,
    price: String,
    startDate: Date,
    endDate: Date,
}
const SaleInfo = () => {
    const { contract: marketplace } = useContract(import.meta.env.VITE_MARKETPLACE_ADDRESS, "marketplace-v3");
    const { contract: nftCollection } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const { mutateAsync: createDirectListing,
        isLoading1,
        error1, } = useCreateDirectListing(marketplace);



    const state = useLocation();
    const NFTId = state?.pathname.split('/')[3];

    const { contract } = useContract(import.meta.env.VITE_NFT_COLLECTION_ADDRESS);
    const { data: nft, isLoading, error } = useNFT(contract, NFTId);


    const { data: hasApproval, isLoading_ } = useContractRead(contract, "isApprovedForAll", [nft?.owner, import.meta.env.VITE_MARKETPLACE_ADDRESS])



    async function checkAndProvideApproval() {
        // const hasApproval = await nftCollection?.call(
        //     "isApprovedForAll",
        //     [nft.owner,
        //     import.meta.env.VITE_MARKETPLACE_CONTRACT
        //     ]);

        // var data = await contract.ERC721.IsApprovedForAll(nft?.owner, import.meta.env.VITE_MARKETPLACE_ADDRESS);
        if (!hasApproval) {
            const txResult = await nftCollection?.call(
                "setApprovalForAll",
                [import.meta.env.VITE_MARKETPLACE_ADDRESS,
                    true]
            );

            if (txResult) {
                console.log("Approval provided");
            }
        }


        return true;
    }

    // const { register: registerDirect, handleSubmit: handleSubmitDirect } = useForm < DirectFormData > ({
    //     defaultValues: {
    //         nftContractAddress: import.meta.env.VITE_COLLECTION_ADDRESS,
    //         tokenId: nft?.metadata?.id,
    //         price: "0",
    //         startDate: new Date(),
    //         endDate: new Date(),
    //     },
    // });

    const [assetContractAddress, setAssetContractAddress] = useState(import.meta.env.VITE_MARKETPLACE_ADDRESS);
    const [tokenId, setTokenId] = useState(NFTId);
    const [pricePerToken, setPricePerToken] = useState(null);
    const [startTimestamp, setStartTimestamp] = useState(null);
    const [endTimestamp, setEndTimestamp] = useState(null);


    async function handleSubmissionDirect() {
        await checkAndProvideApproval();

        const txResult = await createDirectListing({
            assetContractAddress: "0x4E53De7465B85BAe0B10b05D7944833502e08F1f",
            tokenId: 1,
            pricePerToken: "0.00001",
            // currencyContractAddress: "",
            // isReservedListing: false,
            // quantity: 1,
            startTimestamp: new Date(),
            endTimestamp: new Date(
                new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
            ),
        });

        return txResult;
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
                            <input onChange={(ev) => setStartTimestamp(ev.target.value)} type="date" placeholder="date" />
                        </div>
                        <div className="flex gap-10 mt-10">
                            <div>
                                End Date
                            </div>
                            <input onChange={(ev) => setEndTimestamp(ev.target.value)} type="date" placeholder="date" />
                        </div>
                        <div className="flex mt-10 justify-center items-center gap-10 mb-10">
                            <div>price</div>
                            <input type="text" onChange={(ev) => setPricePerToken(ev.target.value)} />
                        </div>
                        {/* <Web3Button
                            contractAddress={"0x4E53De7465B85BAe0B10b05D7944833502e08F1f"}
                            action={async () => {
                                await handleSubmissionDirect();
                            }}
                            onSuccess={(txResult) => {
                                // router.push(`/token/${import.]NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`);
                            }}
                        >Create Direct Listing</Web3Button> */}
                        {/* <Web3Button
                            contractAddress={"0x4E53De7465B85BAe0B10b05D7944833502e08F1f"}
                            action={() => {
                                createDirectListing({
                                    assetContractAddress: "0x4E53De7465B85BAe0B10b05D7944833502e08F1f",
                                    tokenId: tokenId,
                                    pricePerToken: "0.00000001",
                                    // currencyContractAddress: "{{currency_contract_address}}",
                                    // isReservedListing: false,
                                    // quantity: "1",
                                    startTimestamp: new Date(),
                                    endTimestamp: new Date(
                                        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
                                    ),
                                })
                            }
                            }
                        >
                            Create Direct Listing
                        </Web3Button> */}
                        <ButtonCreateDirectListing tokenId={tokenId} />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SaleInfo;