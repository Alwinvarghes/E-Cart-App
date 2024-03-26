
import { faCartShopping,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {

  const dispatch = useDispatch()

  const wishlistArray = useSelector((state)=>state.wishlistRedux)
  console.log(wishlistArray);
  const handleCart = (item)=>{
    dispatch(removeFromWishlist(item.id))
    dispatch(addToCart(item))
  }
  return (
  <>
    <h1 className='text-center mt-5 text-primary'>Wishlist</h1>

   {wishlistArray?.length>0? 
   <Row className='mt-5 p-4'>
    {wishlistArray.map((product)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '100%' }} className='rounded'>
          <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
          <Card.Body>
          <Card.Title className='text-primary'><b>{product.title}</b></Card.Title>
          <Card.Text>
          {product.description.slice(0,50)}...
          <p className='fs-4'><b>${product.price}</b></p>
        </Card.Text>
            <div className='d-flex justify-content-between'>
            <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(product.id))}><FontAwesomeIcon icon={faTrash} /></Button>
            <Button variant="outline-success" onClick={()=>handleCart(product)}><FontAwesomeIcon icon={faCartShopping} /></Button>
            </div>
          </Card.Body>
        </Card>
        </Col>
    ))}
    
 
  </Row>
  :
  <div className='d-flex justify-content-center align-items-center flex-column'>
    <img src="https://doukani.com/img/emptywishlist.jpg" alt="" />
    <button className='btn btn-success mb-5'>Back to Home</button>

  </div>}
 
  </>
  )
}

export default Wishlist
