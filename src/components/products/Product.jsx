import React from 'react'
import rateimg from "../../images/icons/star.png"
import "./product.css"
import { useAuth } from '../../context/GlobalState'

const Product = ({title, price, image, rating, id}) => {

    const {dispatch, basket} = useAuth()
    const addToBasket = ()=>{
        dispatch({
               type:"ADD_TO_BASKET",
               item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
               }
        })
    }
    console.log(basket)
  return (
    <div className='product'>
        <div className="product-info">
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <div className="product-rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p key={i}>
                <img src={rateimg} alt=''/>
                </p>
            ))}
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product