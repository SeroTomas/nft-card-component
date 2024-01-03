export interface CardInterface {
    productImage: ProductImageInterface
    productInfo: CardInfoInterface
    user: UserInfoInterface
}

export interface CardInfoInterface {
    title: string
    description: string
    productPrice: ProductPriceInterface
    productDate: ProductDateInterface
}

export interface ProductImageInterface {
    image: string
    icon: string
}

export interface UserInfoInterface {
    avatar: string
    userName: string
}

export interface ProductPriceInterface {
    icon: string
    price: string
}

export interface ProductDateInterface {
    icon: string
    date: string
}