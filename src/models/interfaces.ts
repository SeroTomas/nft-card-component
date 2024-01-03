export interface CardInterface{
    image: string
    productInfo: CardInfo
    user: UserInfo
}

export interface CardInfo{
    title: string
    description: string
    productPrice: ProductPrice
    productDate: ProductDate
}

export interface UserInfo{
    avatar: string
    userName: string
}

export interface ProductPrice{
    icon: string
    price: string
}

export interface ProductDate{
    icon: string
    date: string
}