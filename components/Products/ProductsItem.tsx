import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

declare type ProductImagesType = {
    url: string
    main: boolean
}

declare type ProductType = {
    name: string
    alias: string
    price: number
    description: string
    sizes: string[]
    features: object
    images: ProductImagesType[]
}

interface ProductProps {
    product: ProductType
}

const ProductsItem = ({ product }: ProductProps) => {
    const [imageUrl, setImageUrl] = useState<string>("/images/main-img.jpg")

    useEffect(()=>{
        if (!!product.images && product.images.length) {
            const img = product.images.filter(img => img.main == true)

            if (img.length && !!img[0].url) {
                setImageUrl(img[0].url)
            } else {
                setImageUrl(product.images[0].url)
            }
        }
    }, [])

    return (
        <div className='products__item'>
            <div className='products__item--image'>
                <Image 
                    src={imageUrl} 
                    alt='' layout='fill' objectFit='cover' />
            </div>
            <div className='products__item--button'>
                <button>Add to bag</button>
            </div>
            <div className='products__item--info'>
                <div className='products__item--info__name'>
                    {product.name}
                </div>
                <div className='products__item--info__price'>
                    ${product.price}
                </div>
            </div>

            <Link href={`/products/${product.alias}`}><a className="products__item--link">&nbsp;</a></Link>
        </div>
    )
}

export default ProductsItem