import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/Cart/CartItem'

const MyBag: NextPage = () => {
    return (
        <>
            <Head>
                <title>Care Ukraine</title>
                <meta name="description" content="Care Ukraine" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header hideCart={true} title="My Bag" goBack={true} />
            <main className='container--main'>

                <section className='container--section section--cart'>
                    <div className='cart'>
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className='cart__total'>
                        <div className='cart__total__label'>Total:</div>
                        <div className='cart__total__value'>$1000</div>
                    </div>
                    <div className='cart__checkout'>
                        Checkout
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default MyBag