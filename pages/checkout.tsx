import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useRouter } from 'next/router'
import { SET_CART, GET_CART, ERROR } from "../store/types";
import { CartProductType } from '../types/types'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getCartData, setCartData } from "../store/actions/cartAction";
import { Dispatch } from 'redux';

const Checkout: NextPage = ({ setCart, cartData, cart }: any) => {
    const router = useRouter()
    const [ cartItems, setCartItems ] = useState<CartProductType[]>([]);

    useEffect(() => {
        setCartItems(cart)
    }, [cart])

    return (
        <>
            <Head>
                <title>Care Ukraine</title>
                <meta name="description" content="Care Ukraine" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header hideCart={true} title="Checkout" goBack={true} />
            <main className='container--main'>

                <section className='container--section section--checkout'>
                    <div className='checkout'>
                        <div className='checkout__title'>Shipping</div>
                        <Formik
                            initialValues={{ 
                                fname: '', 
                                lname: '', 
                                phone: '', 
                                adress: '', 
                                city: '', 
                                state: '', 
                                zip: '', 
                                country: '' 
                            }}
                            validate={values => {
                                const errors = {};
                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                console.log('Submited');
                                
                                let data = {
                                    ...values,
                                    products: cartItems
                                }

                                const JSONdata = JSON.stringify(data)
                                const endpoint = '/api/telegram'
                                const options = {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSONdata
                                }
                        
                                const response = await fetch(endpoint, options)
                                if (response.status === 200) {
                                    setCart([])
                                    router.push('/')
                                }
                            }}
                            >
                            {({ isSubmitting, values }) => (
                                <Form className='checkout__form'>
                                    <Field type="text" name="fname" placeholder="First name" value={values.fname} required />
                                    <Field type="text" name="lname" placeholder="Last name" value={values.lname} required />
                                    <Field type="text" name="phone" placeholder="Phone number" value={values.phone} required />
                                    <Field type="text" name="adress" placeholder="Adress line" value={values.adress} required />
                                    <Field type="text" name="city" placeholder="City" value={values.city} required />
                                    <Field type="text" name="state" placeholder="State/Province/Region" value={values.state} required />
                                    <Field type="text" name="zip" placeholder="Zip/Postal" value={values.zip} required />
                                    <Field type="text" name="country" placeholder="Country" value={values.country} required />

                                    <button type="submit" disabled={isSubmitting} className="checkout__continue">
                                        Continue
                                    </button>
                                </Form>
                            )}
                        </Formik>

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

export default connect(mapStateToProps, mapDispatchToProps) (Checkout)