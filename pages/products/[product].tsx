import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider'
import ProductsSizes from '../../components/Products/ProductsSizes'

const Product: NextPage = () => {
  const router = useRouter()
  const { product } = router.query

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
                        <ProductImageSlider />
                    </div>

                    <div className='product--info'>
                        <div className='product--info__name'>
                            T-shirt "Care Ukraine"
                        </div>
                        <div className='product--info__price'>
                            $50
                        </div>
                        <div className='product--info__sizes'>
                            <ProductsSizes />
                        </div>
                        <div className='product--info__button'>
                            <button className='product--add-to-cart'>Add to bag</button>
                        </div>
                        <div className='product--info__description'>
                            <span className='product--info__description--label'>Description</span>
                            <p>T-shirt is made of high quality cotton fabric, with the addition of elastane.</p>
                        </div>
                        <div className='product--info__features'>
                            <div className='product--info__feature'>
                                <span className='product--info__feature--label'>Contains:</span> cotton - 95%, elastane - 5%
                            </div>
                            <div className='product--info__feature'>
                                <span className='product--info__feature--label'>Care:</span> machine wash cool
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