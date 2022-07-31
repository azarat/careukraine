export declare type ProductImagesType = {
    url: string
    main: boolean
}

export declare type ProductFeaturesType = {
    contains: string
    care: string
}

export declare type ProductType = {
    name: string
    alias: string
    price: number
    description: string
    sizes: string[]
    features: ProductFeaturesType
    images: ProductImagesType[]
}

