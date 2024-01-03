import { CardInfo, UserInfo, CardImage } from "@/components"
import { CardInterface } from "../models"

const Card = ({ productImage, productInfo, user }: CardInterface) => {
    return (
        <div className="flex flex-col p-6 w-[360px] bg-c-blueCard rounded-2xl">
            <CardImage {...productImage} />
            <CardInfo {...productInfo} />
            <UserInfo {...user} />
        </div>
    )
}
export default Card