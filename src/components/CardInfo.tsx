
import { ProductDate, ProductPrice } from "@/components"
import { CardInfoInterface } from "@/models"


const CardInfo = ({ title, description, productDate, productPrice }: CardInfoInterface) => {
    return (
        <div className="flex flex-col gap-4 my-4">
            <h2 className="text-white text-xl font-bold hover:cursor-pointer hover:text-c-cyan transition duration-150 w-fit">{title}</h2>
            <p className="text-c-softBlue font-light">{description}</p>
            <div className="flex justify-between border-b-c-blueLine border-b pb-3">
                <ProductPrice {...productPrice} />
                <ProductDate {...productDate} />
            </div>
        </div>
    )
}
export default CardInfo