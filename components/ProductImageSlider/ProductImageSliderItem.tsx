import Image from 'next/image'

const ProductImageSliderItem = () => {
    return (
        <div className='product-image-slider__item'>
          <div className='product-image-slider__item--image'>
            <Image src="/images/main-img.jpg" alt='' layout='fill' objectFit='cover' />
          </div>
        </div>
    )
}

export default ProductImageSliderItem