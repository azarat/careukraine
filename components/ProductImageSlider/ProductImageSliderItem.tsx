import Image from 'next/image'
import { ProductImagesType } from '../../types/types'

interface ProductImageSliderItemProps {
    image: ProductImagesType
}

const ProductImageSliderItem = ({ image }: ProductImageSliderItemProps) => {
    return (
        <div className='product-image-slider__item'>
          <div className='product-image-slider__item--image'>
            <Image src={image.url} alt='' layout='fill' objectFit='cover' />
          </div>
        </div>
    )
}

export default ProductImageSliderItem