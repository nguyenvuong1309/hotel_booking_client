



import { useMintNFT, useContract, Web3Button, useAddress, ThirdwebSDK } from "@thirdweb-dev/react";

// Your smart contract address
const contractAddress = import.meta.env.VITE_NFT_COLLECTION_ADDRESS;

const Button_min_NFT = ({ name, description, image }) => {
    const sdk = new ThirdwebSDK("fantom-testnet", {
        clientId: "2797b3f9d95ffff77be7cb8dfc5abb26",
    });
    const laztyMint = async () => {
        const contract = await sdk.getContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");
        const results = await contract.erc721.lazyMint([{
            name: "Soldier ape" || name,
            description: "This is a cool NFT sodlier ape" || description,
            image: "https://i.seadn.io/gae/mxCaw5HKuOhjdvE8nl-_TjEkFCAk8gGiYAk8LQ6WEayPLJ0s0TqSerbJoLrRsKk_p9AylO95nLiuo2vxo3g5nBHvR2Vof6VwhpZOeA?auto=format&dpr=1&w=384" || image, // This can be an image url or file

        }]); // uploads and creates the NFTs on chain
        const firstTokenId = results[0].id; // token id of the first created NFT
        const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
    }

    return (
        <Web3Button
            contractAddress={import.meta.env.VITE_NFT_COLLECTION_ADDRESS}
            className="flex bg-purple-400 rounded-3xl font-semibold"
            action={laztyMint}
        >
            Mint NFT
        </Web3Button>
    );
}

export default Button_min_NFT;