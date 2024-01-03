import { ProductDateInterface } from "@/models"

const ProductDate = ({ icon, date }: ProductDateInterface) => {
    return (
        <div className="flex items-center gap-4">
            <img src={icon} alt="Clock icon" />
            <span className="text-c-softBlue text-sm">{date}</span>
        </div>
    )
}
export default ProductDate