import {
    useCreateDirectListing,
    useContract,
    Web3Button,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";

// Your smart contract address
//const contractAddress = "{{contract_address}}";
const contractAddress = "0x4E53De7465B85BAe0B10b05D7944833502e08F1f"
const asset_contract_address = "0x4E53De7465B85BAe0B10b05D7944833502e08F1f"

function ButtonCreateDirectListing({ tokenId }) {
    console.log("🚀 ~ file: ButtonCreateDirectListing.jsx:13 ~ ButtonCreateDirectListing ~ tokenId:", tokenId)
    const { contract } = useContract(contractAddress, "marketplace-v3");
    const {
        mutateAsync: createDirectListing,
        isLoading,
        error,
    } = useCreateDirectListing(contract);

    return (
        <Web3Button
            contractAddress={contractAddress}
            action={() =>
                createDirectListing({
                    assetContractAddress: '0x39798cAF83acCCACcC8b9BBC6158859E1330904D',
                    tokenId: tokenId,
                    pricePerToken: "0.00001",
                    // currencyContractAddress: NATIVE_TOKEN_ADDRESS,
                    // isReservedListing: false,
                    // quantity: "{{quantity}}",
                    startTimestamp: new Date(),
                    endTimestamp: new Date(
                        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
                    ),
                })
            }
        >
            Create Direct Listing
        </Web3Button>
    );
}

export default ButtonCreateDirectListing;