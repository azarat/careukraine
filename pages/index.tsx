import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Products from '../components/Products/Products'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Care Ukraine</title>
        <meta name="description" content="Care Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='container--main'>

        <section className='container--section section--main'>
          <Image src="/images/main-img.jpg" alt="" layout='fill' objectFit='contain' />
        </section>

        <section className='container--section section--about'>
          <p>
            Care Ukraine<br />
            - This is a project, <br />
            the profit from which will go <br />
            to support Ukraine. <br />
            For the purchase <br />
            and production <br />
            of humanitarian aid.
          </p>
        </section>

        <section className='container--section section--products'>
          <Products />
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Home
