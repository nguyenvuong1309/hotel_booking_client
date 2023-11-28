import { useContract, useUnclaimedNFTs } from "@thirdweb-dev/react";





const DisplayAllNotClaimedNFT = () => {
    const { contract, isLoading_contract } = useContract("0x39798cAF83acCCACcC8b9BBC6158859E1330904D");
    const { data: unclaimedNfts, isLoading, error } = useUnclaimedNFTs(contract, { start: 0, count: 100 });
    return (
        <>
            <div className="w-1/5 m-5 bg-slate-500 rounded-xl">
                {unclaimedNfts && unclaimedNfts.length > 0 && unclaimedNfts.map((item) => (
                    <div>
                        <div>
                            <img src={item?.image} alt="" />
                        </div>
                        <div className="flex justify-center h-12 items-center">
                            {item?.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-fit bg-slate-500">
                {unclaimedNfts?.length === 0 && (
                    <div>Don't have unclaimed NFT</div>
                )}
            </div>
        </>
    )
}

export default DisplayAllNotClaimedNFT;