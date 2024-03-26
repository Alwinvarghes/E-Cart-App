import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptycart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const [total,settotal] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //function to access the cart state
const cartArray = useSelector((state)=>state.cartRedux)
console.log(cartArray);
// function find the total price of all products in cart
const getTotal =()=>{
  
    if(cartArray.length>0){
      settotal( cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      settotal(0)
    }
}
//to get the total price at the time of page load and when the cartarray change
useEffect(()=>{
    getTotal()
},[cartArray])

console.log(total);

//function to checkout
const checkout = ()=>{
  alert('Your order placed successfully')
  dispatch(emptycart())
  navigate('/')
}
  return (
    <>
    <h1 className='text-center text-primary' style={{marginTop:'150px'}}>CART</h1>
      {cartArray?.length>0?
        <div className='row'>

<div className="col-md-8 p-5 d-flex justify-content-center align-items-center" style={{overflowX:'auto'}}>
  <table className='table shadow'>
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Image</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
   <tbody>
     {cartArray.map((product,index)=>( <tr>
      <td>{index+1}</td>
      <td>{product.title}</td>
      <td><img src={product.thumbnail} alt="" width={'50px'} height={'50px'} /></td>
      <td>${product.price}</td>
      <td><button className='btn btn-danger' onClick={()=>dispatch(removeFromCart(product.id))}><FontAwesomeIcon icon={faTrash} /></button></td>
      </tr>)) 
    }
    </tbody>

  </table>
</div>
<div className="col-md-4 p-5 d-flex justify-content-center align-items-center">
  <div className='shadow p-4'>
    <h3 className='text-primary mb-4'>Cart Summery</h3>
    <h5>Total Number of Product: <span className='text-warning'>{cartArray.length}</span></h5>
    <h5>Total price : <span className='text-success'>${total}</span> </h5>
    <button className='btn btn-success mt-2 w-100' onClick={checkout}>Check Out</button>

  </div>
</div>
</div>
:
<div className='row mt-5'>
  <div className="col-md-1"></div>
  <div className="col-md-10 d-flex justify-content-center align-items-center flex-column">
    <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" height={'400px'} />
    <h1 className='text-primary'>Your cart is empty....</h1>
  </div>
  <div className="col-md-1"></div>
</div>
}
    </>
  )
}

export default Cart
