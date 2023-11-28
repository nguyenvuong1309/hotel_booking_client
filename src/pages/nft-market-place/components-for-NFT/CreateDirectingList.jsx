import { useContract, useCreateDirectListing } from "@thirdweb-dev/react";




const CreateDirectListing = () => {
    const { contract } = useContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");
    console.log("🚀 ~ file: CreateDirectingList.jsx:8 ~ CreateDirectListing ~ _isLoading:", contract)
    const {
        mutate: createDirectListing,
        isLoading,
        error,
    } = useCreateDirectListing(contract);

    if (error) {
        console.error("failed to create direct listing", error);
    }
    const directListingData = {
        metadata: {
            id: "8",
            image: "https://i.seadn.io/gae/mxCaw5HKuOhjdvE8nl-_TjEkFCAk8gGiYAk8LQ6WEayPLJ0s0TqSerbJoLrRsKk_p9AylO95nLiuo2vxo3g5nBHvR2Vof6VwhpZOeA?auto=format&dpr=1&w=384",
            name: "My NFT!",
            uri: "ipfs://QmZUZmDTt9waygbh2XhMGp71DjJz7iGrxaRnKYqzRGmbGx/8"
        },
        owner: "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53",
        supply: "1",
        type: "ERC721"
        // "name": "Doctor strange ape",
        // "description": "This is NFT doctor strange ape",
        // "image": "ipfs://QmTxAM9w8ogFZR9FKLzkhXfpcT3rWZdZbrLwo3g5ikxMPk/4.webp",
        // "external_url": "",
        // "background_color": "",
        // "attributes": [
        //     {
        //         "trait_type": "ape",
        //         "value": "10"
        //     }
        // ],
        // "customImage": "",
        // "customAnimationUrl": ""
    }

    const create = async () => {
        console.log("click")
        if (contract) {
            const txResult = await contract.directListings.createListing({
                assetContractAddress: "0x39798cAF83acCCACcC8b9BBC6158859E1330904D", // Required - smart contract address of NFT to sell
                tokenId: "8", // Required - token ID of the NFT to sell
                pricePerToken: "0.000001" // Required - price of each token in the listing
                //currencyContractAddress: "{{currency_contract_address}}", // Optional - smart contract address of the currency to use for the listing
                // isReservedListing: false, // Optional - whether or not the listing is reserved (only specific wallet addresses can buy)
                // quantity: "{{quantity}}", // Optional - number of tokens to sell (1 for ERC721 NFTs)
                // startTimestamp: new Date(), // Optional - when the listing should start (default is now)
                // endTimestamp: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // Optional - when the listing should end (default is 7 days from now)
            });
            console.log("🚀 ~ file: CreateDirectingList.jsx:55 ~ create ~ txResult:", txResult)
        }
    }
    return (
        <button
            disabled={isLoading}
            onClick={() => create()}
        >
            Create Direct Listing!
        </button>
    );
};

export default CreateDirectListing;