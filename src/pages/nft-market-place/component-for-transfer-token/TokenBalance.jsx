




import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";


export default function TokenBalance({ tokenAddress }) {
    const address = useAddress();
    const { contract } = useContract(tokenAddress);
    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
    } = useTokenBalance(contract, address);

    return (
        // <Box mt={4}>
        //     {!isTokenBalanceLoading && (
        //         <Text>Balance: {tokenBalance?.displayValue}</Text>
        //     )}
        // </Box>
        <div className="flex justify-center items-center font-bold text-xl">
            {
                !isTokenBalanceLoading && (
                    <div>Balance: {tokenBalance?.displayValue}</div>
                )
            }
        </div>
    )
}