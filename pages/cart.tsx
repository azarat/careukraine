import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/Cart/CartItem'
import { SET_CART, GET_CART, ERROR } from "../store/types";
import { CartProductType } from '../types/types'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getCartData, setCartData } from "../store/actions/cartAction";
import { Dispatch } from 'redux';
import { useRouter } from 'next/router'

const MyBag: NextPage = ({ setCart, cartData, cart }: any) => {
    const router = useRouter()
    const [ cartItems, setCartItems ] = useState<CartProductType[]>([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    useEffect(() => {
        setCartItems(cart)

        const caculateTotal = cart.reduce(
            (total: number, product: CartProductType) => 
                total = total + (product.price * product.quantity), 0);

        setTotalPrice(caculateTotal)
    }, [cart]);

    const incrementCartItemQty = (cartItemProduct: CartProductType, incrementer: number) => {
        const cartItemIndex = cartItems.findIndex((p: CartProductType) => {
            return (p.alias == cartItemProduct.alias && p.size == cartItemProduct.size)
        })

        if (cartItemIndex >= 0) {            
            let cartItemsModifying = [...cartItems]
            let incrementedQty = {...cartItemsModifying[cartItemIndex]}.quantity

            if (incrementer < 0 && incrementedQty == 1) {
                const removeCartItem = cartItemsModifying.filter((item: CartProductType, index: number) => index != cartItemIndex)
                setCart(removeCartItem)

                return true
            }

            let cartItemModifying = {
                ...cartItemsModifying[cartItemIndex],
                quantity: incrementedQty + incrementer
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
            </Head>

            <Header hideCart={true} title="My Bag" goBack={true} />
            <main className='container--main'>

                <section className='container--section section--cart'>
                    <div className='cart'>
                        {cartItems.map((product: CartProductType)=>
                            <CartItem 
                            incrementCartItemQty={incrementCartItemQty}
                            product={product} 
                            key={`${product.alias}-${product.size}`} />
                        )}
                    </div>
                    <div className='cart__total'>
                        <div className='cart__total__label'>Total:</div>
                        <div className='cart__total__value'>${totalPrice}</div>
                    </div>
                    <div className='cart__checkout' onClick={() => router.push("/checkout")}>
                        Checkout
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

export default connect(mapStateToProps, mapDispatchToProps) (MyBag)