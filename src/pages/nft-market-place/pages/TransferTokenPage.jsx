

import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Header from "../components/header";
import { useState } from "react";
import TokenSelection from "../component-for-transfer-token/TokenSelection";
import TokenBalance from "../component-for-transfer-token/TokenBalance";








const TransferTokenPage = () => {
    const address = useAddress();
    const { contract } = useContract(import.meta.env.VITE_SMART_CONTRACT_TRANSFER_TOKEN_ADDRESS);
    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(contract, "getVerifiedTokens");
    console.log("🚀 ~ file: TransferTokenPage.jsx:22 ~ TransferTokenPage ~ verifiedTokens:", verifiedTokens)
    const [formData, setFormData] = useState({
        receiver: '',
        amount: '',
        message: ''
    });

    const [selectedToken, setSelectedToken] = useState('');

    const handleChange = (event, name) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: event.target.value
        }));
    };

    const handleTokenSelection = (tokenAddress) => {
        setSelectedToken(tokenAddress);
    };

    return (
        <div className="mb-96">
            <div className="mt-10">
                <Header />
            </div>
            <div className="flex justify-center font-bold mt-10 text-xl">
                Transfer Token Page
            </div>
            <div className="grid justify-center mt-10 border border-black">
                <div className="mb-5">select token to transfer</div>
                <div className="flex justify-center">
                    {
                        !isVerifiedTokensLoading &&
                        verifiedTokens.map((token) => (
                            <div className="flex gap-2">
                                <div
                                    key={token}
                                    onClick={() => handleTokenSelection(token)}
                                    className={""}
                                >
                                    <TokenSelection
                                        tokenAddress={token}
                                        isSelected={selectedToken === token}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <TokenBalance tokenAddress={selectedToken} />
                </div>
            </div>
        </div>
    )
}

export default TransferTokenPage;