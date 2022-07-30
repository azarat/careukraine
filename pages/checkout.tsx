import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Checkout: NextPage = () => {
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
                                email: '', 
                            }}
                            validate={values => {
                                const errors = {};
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log('Submited');
                                
                            }}
                            >
                            {({ isSubmitting }) => (
                                <Form className='checkout__form'>
                                    <Field type="text" name="fname" placeholder="First name" />
                                    <Field type="text" name="lname" placeholder="Last name" />
                                    <Field type="text" name="phone" placeholder="Phone number" />
                                    <Field type="text" name="adress" placeholder="Adress line" />
                                    <Field type="text" name="city" placeholder="City" />
                                    <Field type="text" name="state" placeholder="State/Province/Region" />
                                    <Field type="text" name="zip" placeholder="Zip/Postal" />
                                    <Field type="text" name="country" placeholder="Country" />

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

export default Checkout