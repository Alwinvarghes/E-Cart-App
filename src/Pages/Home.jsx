import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Home() {

  const dispatch = useDispatch()
  

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  return (
  <Row className='p-4' style={{marginTop:'150px'}}>
   { data?.length>0?
   data.map(product=>(
    <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: '100%' }} className='rounded shadow'>
      <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
      <Card.Body>
        <Card.Title className='text-primary'><b>{product.title}</b></Card.Title>
        <Card.Text>
          {product.description.slice(0,50)}...
          <p className='fs-4'><b>${product.price}</b></p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button variant="outline-danger" onClick={()=>dispatch(addToWishlist(product))}><FontAwesomeIcon icon={faHeart} /></Button>
        <Button variant="outline-success" onClick={()=>dispatch(addToCart(product))}><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
   ))
   : <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" alt="" width={'100%'} height={'500px'} />
    }
 
  </Row>
   
  )
}

export default Home
