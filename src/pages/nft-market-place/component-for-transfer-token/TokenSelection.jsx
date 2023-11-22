



import { useContract, useContractMetadata } from "@thirdweb-dev/react";



const TokenSelection = ({ tokenAddress, isSelected }) => {

    const {
        contract
    } = useContract(tokenAddress);

    const {
        data: tokenMetadata,
        isLoading: isTokenMetadataLoading,
    } = useContractMetadata(contract);
    console.log("🚀 ~ file: TokenSelection.jsx:19 ~ TokenSelection ~ tokenMetadata:", tokenMetadata)

    let coinBorderColor = "";

    if (isSelected) {
        coinBorderColor = "  border-sky-500 ";
    }

    return (
        // <Card p={4} mr={2} border={"2px solid"} borderColor={coinBorderColor}>
        //     {!isTokenMetadataLoading ? (
        //         <Box>
        //             <Text>{tokenMetadata.symbol}</Text>
        //         </Box>
        //     ) : (
        //         <Spinner />
        //     )}
        // </Card>
        <div>
            {isTokenMetadataLoading ? (
                <div>is loading ...</div>
            ) : (
                <div className={coinBorderColor + "border-2 w-16 h-10 flex font-bold justify-center items-center"} >
                    {tokenMetadata?.symbol}
                </div>
            )}
        </div>

    )
};

export default TokenSelection;