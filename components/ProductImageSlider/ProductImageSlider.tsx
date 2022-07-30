import Slider from "react-slick";
import ProductImageSliderItem from './ProductImageSliderItem'
import ChevronLeftSVG from '../svg/ChevronLeft.svg'
import ChevronRightSVG from '../svg/ChevronRight.svg'

const ProductImageSlider = () => {

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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    
    return (
        <Slider {...settings} className="product-image-slider">

            <ProductImageSliderItem />
            <ProductImageSliderItem />
            <ProductImageSliderItem />

        </Slider>
    )
}

export default ProductImageSlider