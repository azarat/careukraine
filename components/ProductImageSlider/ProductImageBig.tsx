import { ProductImagesType } from '../../types/types'
import Image from 'next/image'

interface ProductImageBigProps {
    image: string
}

const ProductImageBig = ({image}: ProductImageBigProps) => {
    return (
        <div className='product--image--big'>
            <Image src={image} layout="fill" objectFit='contain' />
        </div>
    )
}

export default ProductImageBig