import { ProductPrice } from "../models"

const CardPrice = ({icon, price}:ProductPrice) => {
    return (
        <div className="flex items-center gap-2 ">
            <img src={icon} alt="eth icon" />
            <span className="text-c-cyan text-lg">{price} ETH</span>
        </div>
    )
}
export default CardPrice