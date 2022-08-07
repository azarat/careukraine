import { ProductImagesType } from '../../types/types'
import Image from 'next/image'

interface ProductImageBigSliderItemProps {
    image: ProductImagesType
}

const ProductImageBigSliderItem = ({image}: ProductImageBigSliderItemProps) => {
    return (
        <div className='product-image-slider--big__item'>
          <div className='product-image-slider--big__item--image'>
            {/* <Image src={image.url} alt='' layout='fill' objectFit='contain' /> */}
            <img src={image.url} alt='' />
          </div>
        </div>
    )
}

export default ProductImageBigSliderItem