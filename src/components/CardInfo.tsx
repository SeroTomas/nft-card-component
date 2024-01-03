import { CardInfo } from "../models"


const CardInfo = ({ title, description, productDate, productPrice}: CardInfo) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                
            </div>
        </div>
    )
}
export default CardInfo