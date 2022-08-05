import { useEffect, useState } from "react";
import Image from 'next/image'
import { CartProductType } from '../../types/types'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

interface CartItemProps {
    product: CartProductType
    incrementCartItemQty: any
}

const CartItem = ({ product, incrementCartItemQty }: CartItemProps) => {
    const router = useRouter()
  
    const imageFiltered = product.images.filter(i => i.main)
    const imageMain = imageFiltered.length ? imageFiltered[0] : product.images[0]

    return (
        <div className='cart__item'>
            <div className='cart__item__image' onClick={() => router.push(`/products/${product.alias}`)}>
                <Image src={imageMain.url} alt='' layout='fill' objectFit='cover' />
            </div>
            <div className='cart__item__info'>
                <div className='cart__item__info--name' onClick={() => router.push(`/products/${product.alias}`)}>
                    {product.name}
                </div>
                <div className='cart__item__info--price'>
                    <span>Price:</span> ${product.price}
                </div>
                <div className='cart__item__info--size'>
                    <div className='cart__item__info--size__label'>
                        Size
                    </div>
                    <div className='cart__item__info--size__content'>
                        {product.size}
                    </div>
                </div>
                <div className='cart__item__info--quantity'>
                    <div className='cart__item__info--quantity__label'>
                        Quantity
                    </div>
                    <div className='cart__item__info--quantity__content'>
                        <button onClick={() => incrementCartItemQty(product, -1)}>-</button> 
                        <input type="text" readOnly value={product.quantity} /> 
                        <button onClick={() => incrementCartItemQty(product, 1)}>+</button>
                    </div>
                </div>
                <div className='cart__item__info--subtotal'>
                    <div className='cart__item__info--subtotal__label'>
                        Subtotal
                    </div>
                    <div className='cart__item__info--subtotal__content'>
                        ${product.price * product.quantity}
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default CartItem