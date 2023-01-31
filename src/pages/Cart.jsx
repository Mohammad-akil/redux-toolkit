import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id)=>{
      dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map(product => (
            <div key={product.id} className='cartCard'>
                  <img src={product.image} alt="cert" />
                  <h5>{product.title}</h5>
                  <h1>{product.price}</h1>
                  <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart