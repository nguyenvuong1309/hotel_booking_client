



import { useClaimNFT, useContract } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const ClaimAnNFT = () => {
    // const sdk = new ThirdwebSDK("fantom-testnet", {
    //     clientId: "2797b3f9d95ffff77be7cb8dfc5abb26",
    // });
    // const ClaimNFT = async () => {
    //     const contract = await sdk.getContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");
    //     const quantity = 1; // how many unique NFTs you want to claim

    //     const tx = await contract.erc721.claim(quantity);
    //     const receipt = tx.receipt; // the transaction receipt
    //     const claimedTokenId = tx.id; // the id of the NFT claimed
    //     const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
    // }
    // return (
    //     <button onClick={() => {
    //         ClaimNFT()
    //     }}>
    //         Claim an NFT
    //     </button>
    // )
    const { contract } = useContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");
    const {
        mutate: claimNFT,
        isLoading,
        error,
    } = useClaimNFT(contract);

    if (error) {
        console.error("failed to claim nft", error);
    }

    return (
        <button
            disabled={isLoading}
            onClick={() => claimNFT({ to: "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53", quantity: 1 })}
        >
            Claim NFT!
        </button>
    );
}

export default ClaimAnNFT;