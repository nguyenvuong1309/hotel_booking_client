import { ThirdwebNftMedia } from "@thirdweb-dev/react";





const NFTItem = ({ nft }) => {
    return (
        <div >
            <ThirdwebNftMedia
                key={nft.metadata.id.toString()}
                metadata={nft.metadata}
                // style={{ width: 200 }}
                className="w-[230px] h-[250px] object-fill p-4"
            />
        </div>
    )
}
export default NFTItem;