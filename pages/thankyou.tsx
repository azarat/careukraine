import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ThankYou: NextPage = () => {
    return (
        <>
            <Head>
                <title>Care Ukraine</title>
                <meta name="description" content="Care Ukraine" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header hideCart={true} goBack={true} />
            <main className='container--main'>

                <section className='container--section section--thankyou'>
                    <div className='thankyou'>
                        <div className='thankyou__message'>Thank you</div>
                        <div className='thankyou__button'>Back to shop</div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default ThankYou