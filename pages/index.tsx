import type { NextPage } from 'next'
import { useEffect, useState, useLayoutEffect } from "react";
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
import * as mainImg from '../data/main-img.json'

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

const Home: NextPage = ({ setCart, cartData, cart }: any) => {
  const [ cartItems, setCartItems ] = useState([]);
  const [ mainImgUrl, setMainImgUrl ] = useState(mainImg['window-sm']);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setCartItems(cart)
  }, [cart]);

  useEffect(() => {
    if (width < 768 && mainImgUrl != mainImg['window-sm']) {
      setMainImgUrl(mainImg['window-sm'])
    } else if (width >= 768 && width < 1200 && mainImgUrl != mainImg['window-xs']) {
      setMainImgUrl(mainImg['window-xs'])
    } else if (width >= 1200 && width < 1920 && mainImgUrl != mainImg['window-xl']) {
      setMainImgUrl(mainImg['window-xl'])
    } else if (width >= 1920 && mainImgUrl != mainImg['window-xxl']) {
      setMainImgUrl(mainImg['window-xxl'])
    }

    // if (width <= 768 && mainImgUrl != mainImg['window-sm']) {
    //   setMainImgUrl(mainImg['window-sm'])
    // } else if (width <= 1200 && mainImgUrl != mainImg['window-xs']) {
    //   setMainImgUrl(mainImg['window-xs'])
    // } else if (width <= 1920 && mainImgUrl != mainImg['window-xl']) {
    //   setMainImgUrl(mainImg['window-xl'])
    // }
  }, [width])
  
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
          <Image src={mainImgUrl} alt="" layout='fill' objectFit='contain' />
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
