import { ProductImagesType } from '../../types/types'
import Image from 'next/image'
import Slider from "react-slick";
import ProductImageBigSliderItem from './ProductImageBigSliderItem'
import ChevronLeftSVG from '../svg/ChevronLeft.svg'
import ChevronRightSVG from '../svg/ChevronRight.svg'

interface ProductImageBigSliderProps {
    images: ProductImagesType[]
    onImageClick: any
}

const ProductImageBigSlider = ({images, onImageClick}: ProductImageBigSliderProps) => {
    const NextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
            className="product-image-slider__arrow-next"
            onClick={onClick}>
                <ChevronRightSVG />
            </div>
        );
    }
    
    const PrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
            className="product-image-slider__arrow-prev"
            onClick={onClick}>
                <ChevronLeftSVG />
            </div>
        );
    }  

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="product-image-slider--big">
            <Slider {...settings}>
                {!!images && images.length && images.map((img) => 
                    <ProductImageBigSliderItem image={img} key={img.url} onImageClick={onImageClick} />
                )}
            </Slider>
        </div>
    )
}

export default ProductImageBigSlider