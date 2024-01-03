
import { ProductDate, ProductPrice } from "@/components"
import { CardInfoInterface } from "@/models"


const CardInfo = ({ title, description, productDate, productPrice }: CardInfoInterface) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <ProductPrice {...productPrice} />
                <ProductDate {...productDate} />
            </div>
        </div>
    )
}
export default CardInfo