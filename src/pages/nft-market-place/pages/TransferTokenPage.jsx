

import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Header from "../components-for-NFT/header";
import { useState } from "react";
import TokenSelection from "../component-for-transfer-token/TokenSelection";
import TokenBalance from "../component-for-transfer-token/TokenBalance";
import TransferButton from "../component-for-transfer-token/TransferButton";
import { toast } from "react-toastify";










const TransferTokenPage = () => {
    const notify = () => toast("Wow so easy!");
    const address = useAddress();
    const { contract } = useContract(import.meta.env.VITE_SMART_CONTRACT_TRANSFER_TOKEN_ADDRESS);
    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(contract, "getVerifiedTokens");
    const [selectedToken, setSelectedToken] = useState('');


    const handleTokenSelection = (tokenAddress) => {
        setSelectedToken(tokenAddress);
    };

    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("Thanh toan token cho co ban com duoi toa");

    return (
        <div className="mb-96">
            <div className="mt-5">
                <Header />
            </div>
            <div className="flex justify-center font-bold mt-10 text-xl">
                Transfer Token Page
            </div>
            <div className="flex">
                <div className="w-4/12" />
                <div className="p-5 mt-10 border border-black w-4/12">
                    <div className="mb-5 flex justify-center">select token to transfer</div>
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
                    <div className="p-5">
                        <TokenBalance tokenAddress={selectedToken} />
                    </div>
                    <div className="">
                        <div className="my-2">
                            <div>Receiver address : </div>
                            <input type="text" className="bg-purple-50" placeholder="0x000000000000000..." value={receiver} onChange={(ev) => setReceiver(ev.target.value)} />
                        </div>
                        <div className="my-2">
                            <div>Amount : </div>
                            <input type="text" className="bg-purple-50" placeholder="0.0" value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                        </div>
                        <div className="my-2">
                            <div>Message : </div>
                            <input type="text" className="bg-purple-50" placeholder="thanh toan token cho co ban com" value={message} onChange={(ev) => setMessage(ev.target.value)} />
                        </div>
                        <div className="flex justify-center items-center">
                            {
                                address ? (
                                    <div>
                                        <TransferButton key={contract?.address} tokenAddress={selectedToken} receiver={receiver} amount={amount.toString()} message={message} />
                                    </div>
                                ) : (
                                    <div key={contract?.address}>
                                        Please connect your wallet to make a transfer.
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="w-4 /12" />
            </div>
        </div>
    )
}

export default TransferTokenPage;