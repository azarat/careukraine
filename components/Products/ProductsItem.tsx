import Image from 'next/image'

const ProductsItem = () => {
    return (
        <div className='products__item'>
            <div className='products__item--image'>
                <Image src="/images/main-img.jpg" alt='' layout='fill' objectFit='cover' />
            </div>
            <div className='products__item--button'>
                <button>Add to bag</button>
            </div>
            <div className='products__item--info'>
                <div className='products__item--info__name'>
                    T-shirt "Care Ukraine"
                </div>
                <div className='products__item--info__price'>
                    $50
                </div>
            </div>
        </div>
    )
}

export default ProductsItem