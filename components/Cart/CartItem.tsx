import Image from 'next/image'

const CartItem = () => {
    return (
        <div className='cart__item'>
            <div className='cart__item__image'>
                <Image src="/images/main-img.jpg" alt='' layout='fill' objectFit='cover' />
            </div>
            <div className='cart__item__info'>
                <div className='cart__item__info--name'>
                    T-shirt "Care Ukraine"
                </div>
                <div className='cart__item__info--price'>
                    <span>Price:</span> $50
                </div>
                <div className='cart__item__info--size'>
                    <div className='cart__item__info--size__label'>
                        Size
                    </div>
                    <div className='cart__item__info--size__content'>
                        xxxxl
                    </div>
                </div>
                <div className='cart__item__info--quantity'>
                    <div className='cart__item__info--quantity__label'>
                        Quantity
                    </div>
                    <div className='cart__item__info--quantity__content'>
                        <button>-</button> <input type="text" readOnly value="10" /> <button>+</button>
                    </div>
                </div>
                <div className='cart__item__info--subtotal'>
                    <div className='cart__item__info--subtotal__label'>
                        Subtotal
                    </div>
                    <div className='cart__item__info--subtotal__content'>
                        $500
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default CartItem