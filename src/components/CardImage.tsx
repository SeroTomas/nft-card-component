import { ProductImageInterface } from "@/models"

interface Props {
    children: React.ReactNode
    icon: string
}

const CardImageHover = ({ children, icon }: Props) => {


    return (
        <div className="relative" >

            {children}
            <div className="absolute grid place-content-center top-0 left-0 rounded-xl bg-c-cyan h-[312px] w-[312px] bg-opacity-35 opacity-0 hover:opacity-100 hover:cursor-pointer">
                <img src={icon} />
            </div>
        </div>
    )
}



const CardImage = ({ image, icon }: ProductImageInterface) => {
    return (
        <>
            <CardImageHover icon={icon}>
                <img src={image} alt="Product image" className="rounded-xl" />
            </CardImageHover>


        </>
    )
}
export default CardImage