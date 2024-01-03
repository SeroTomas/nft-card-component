import { ProductPriceInterface } from "../models"

const ProductPrice = ({icon, price}:ProductPriceInterface) => {
    return (
        <div className="flex items-center gap-2 ">
            <img src={icon} alt="eth icon" />
            <span className="text-c-cyan text-lg">{price} ETH</span>
        </div>
    )
}
export default ProductPrice