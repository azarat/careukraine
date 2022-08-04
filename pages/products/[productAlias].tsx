import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider'
import ProductsSizes from '../../components/Products/ProductsSizes'
import Loader from '../../components/Loader'
import { ProductType } from '../../types/types'
import { _products } from "../../data/products.json"

const Product: NextPage = () => {
  const router = useRouter()
  const { productAlias } = router.query
  const [product, setProduct] = useState<ProductType | null>(null)
  const [size, setSize] = useState<string>("")

  useEffect(()=>{
    const productsMatch = _products.filter((p) => p.alias == productAlias)
    if (productsMatch.length) setProduct(productsMatch[0])
  }, [productAlias])

  const addToBag = () => {
    
  }

  if (product == null) {
    return (
        <>
            <Loader />
        </>
    )
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
                        <ProductImageSlider images={product.images} />
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
                            <button className='product--add-to-cart' onClick={addToBag}>Add to bag</button>
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

export default Product