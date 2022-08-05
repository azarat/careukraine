import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Products from '../components/Products/Products'
import { SET_CART, GET_CART, ERROR } from "../store/types";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getCartData, setCartData } from "../store/actions/cartAction";
import { Dispatch } from 'redux';

const Home: NextPage = ({ setCart, cartData, cart }: any) => {
  const [ cartItems, setCartItems ] = useState();

  useEffect(() => {
    setCartItems(cart)
  }, [cart]);
  
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

export default connect(mapStateToProps, mapDispatchToProps) (Home)
