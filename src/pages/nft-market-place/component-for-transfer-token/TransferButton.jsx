


import { Web3Button, useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TransferButton = ({ tokenAddress, receiver, amount, message }) => {
    const {
        contract: tokenContract
    } = useContract(tokenAddress, 'token');
    console.log("🚀 ~ file: TransferButton.jsx:12 ~ TransferButton ~ tokenContract:", tokenContract)

    const {
        contract: transferContract
    } = useContract(import.meta.env.VITE_SMART_CONTRACT_TRANSFER_TOKEN_ADDRESS);
    console.log("🚀 ~ file: TransferButton.jsx:17 ~ TransferButton ~ transferContract:", transferContract)


    return (
        <div>
            <Web3Button
                contractAddress={import.meta.env.VITE_SMART_CONTRACT_TRANSFER_TOKEN_ADDRESS}
                action={async (contract) => {
                    await tokenContract?.setAllowance(
                        import.meta.env.VITE_SMART_CONTRACT_TRANSFER_TOKEN_ADDRESS,
                        ethers.utils.parseEther(amount).toString()
                    );

                    await transferContract?.call(
                        "transfer",
                        [
                            tokenAddress,
                            receiver,
                            ethers.utils.parseEther(amount),
                            message
                        ]
                    );
                }}
                onSuccess={() => {
                    toast.success('🦄 success transfer token!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }}
            >Transfer Token</Web3Button>
        </div>
    );
}

export default TransferButton;