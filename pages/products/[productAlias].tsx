import { useState, useEffect, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider'
import ProductsSizes from '../../components/Products/ProductsSizes'
import Loader from '../../components/Loader'
import { ProductType, CartProductType } from '../../types/types'
import { _products } from "../../data/products.json"
import { SET_CART, GET_CART, ERROR } from "../../store/types";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getCartData, setCartData } from "../../store/actions/cartAction";
import { Dispatch } from 'redux';

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
return size;
}

const Product: NextPage = ({ setCart, cartData, cart }: any) => {
  const router = useRouter()
  const [width, height] = useWindowSize();
  const { productAlias } = router.query
  const [product, setProduct] = useState<ProductType | null>(null)
  const [size, setSize] = useState<string>("")
  const [touched, setTouched] = useState<boolean>(false)
 
  const [ cartItems, setCartItems ] = useState<CartProductType[]>([]);

  useEffect(() => {
    setCartItems(cart)
  }, [cart]);
  
  useEffect(()=>{
    if (!!product) 
        setSize(product.sizes[0])
  }, [product])

  useEffect(() => {
    if (touched == true) {
        const timer = window.setInterval(() => {
            setTouched(false)
        }, 1000);
    
        return () => { 
            window.clearInterval(timer);
        }
    }
  }, [touched])

  useEffect(()=>{
    const productsMatch = _products.filter((p) => p.alias == productAlias)
    if (productsMatch.length) setProduct(productsMatch[0])
  }, [productAlias])

  if (product == null) {
    return (
      <>
        <Loader />
      </>
    )
  }

  const addToBag = () => {
    if (!size || size == "") {
        console.log("Choose size!")
        return false
    }

    const cartItemIndex = cartItems.findIndex((p: CartProductType) => {
        return (p.alias == product.alias && p.size == size)
    })

    if (cartItemIndex == -1) {
        setCart([
            ...cartItems,
            {
               alias: product.alias,
               name: product.name,
               price: product.price,
               images: product.images,
               size: size,
               quantity: 1
            }
        ])
    } else {
        let cartItemsModifying = [...cartItems]

        let cartItemModifying = {
            ...cartItemsModifying[cartItemIndex],
            quantity: {...cartItemsModifying[cartItemIndex]}.quantity + 1
        };

        cartItemsModifying[cartItemIndex] = cartItemModifying

        setCart(cartItemsModifying)
    }

  }

  return (
    <>
        <Head>
            <title>Care Ukraine</title>
            <meta name="description" content="Care Ukraine" />
            <link rel="icon" href="/favicon.ico" />

            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

        </Head>

        <Header goBack={true} />
        <main className='container--main'>

            <section className='container--section section--product'>

                <div className='product'>
                    <div className='product--image'>
                        {width < 768 && 
                            <ProductImageSlider images={product.images} />
                        }
                    </div>

                    <div className='product--info'>
                        <div className='product--info__name'>
                            {product.name}
                        </div>
                        <div className='product--info__price'>
                            ${product.price}
                        </div>
                        <div className='product--info__sizes'>
                            <ProductsSizes 
                                sizes={product.sizes} 
                                onClick={size => setSize(size)} 
                                currentSize={size} />
                        </div>
                        <div className='product--info__button'>
                            <button 
                            className={`product--add-to-cart${touched ? " btn-pressed" : ""}`} 
                            onMouseDown={() => setTouched(true)}
                            onMouseUp={() => setTouched(false)}
                            onClick={addToBag}>Add to bag</button>
                        </div>
                        <div className='product--info__description'>
                            <span className='product--info__description--label'>Description</span>
                            <p>{product.description}</p>
                        </div>
                        <div className='product--info__features'>
                            <div className='product--info__feature'>
                                <span className='product--info__feature--label'>Contains:</span> {product.features.contains}
                            </div>
                            <div className='product--info__feature'>
                                <span className='product--info__feature--label'>Care:</span> {product.features.care}
                            </div>
                            <div className='product--info__feature'>
                                <span className='product--info__feature--label'>Free shipping</span>
                            </div>
                        </div>
                        <div className='product--info__share'>
                            <div className='product--info__share__item label'>
                                Share
                            </div>
                            <div className='product--info__share__item'>
                                Facebook
                            </div>
                            <div className='product--info__share__item'>
                                Instagram
                            </div>
                            <div className='product--info__share__item'>
                                Pinterest
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
        <Footer />
    </>
  )
}

function mapStateToProps(store: any) {
    const { cartData } = store;
    return { cart: cartData.cart };
}
  
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getCart: () => dispatch({
      type: GET_CART
    }),
    setCart: (data: any) => dispatch({
      type: SET_CART,
      payload: data,
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Product)