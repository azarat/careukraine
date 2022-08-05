import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useRouter } from 'next/router'

const ThankYou: NextPage = () => {
    const router = useRouter()

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
                        <div className='thankyou__button' onClick={() => router.push('/')}>Back to shop</div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default ThankYou