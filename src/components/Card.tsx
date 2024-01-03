import { CardInterface } from "../models"

const Card = ({ image, producInfo, productUser }: CardInterface) => {
    return (
        <div className="flex flex-col p-6">
            <img src={image} alt="Product NFT" className="rounded-xl" />

        </div>
    )
}
export default Card