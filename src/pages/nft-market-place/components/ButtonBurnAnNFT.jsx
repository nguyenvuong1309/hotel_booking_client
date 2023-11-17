import { useBurnNFT, useContract } from "@thirdweb-dev/react";




const ButtonBurnAnNFT = ({ id }) => {
    const { contract } = useContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");
    const {
        mutate: burnNFT,
        isLoading,
        error,
    } = useBurnNFT(contract);

    if (error) {
        console.error("failed to burn NFT", error);
    }

    return (
        <button
            className="flex  justify-center items-center bg-purple-300 w-16 h-8 rounded-3xl"
            disabled={isLoading}
            onClick={() => burnNFT({ tokenId: id, amount: 1 })}
        >
            Burn
        </button>
    );
};

export default ButtonBurnAnNFT;