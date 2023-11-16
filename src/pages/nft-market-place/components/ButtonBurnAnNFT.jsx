import { useBurnNFT, useContract } from "@thirdweb-dev/react";




const ButtonBurnAnNFT = ({ id }) => {
    const { contract } = useContract("0x882E5e76D12ba94983D0813946DE4738C2691A21");
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