import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge, Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistRedux)
  console.log(wishlistArray);
  const cartArray = useSelector((state)=>state.cartRedux)
  console.log(cartArray);
  return (
    <Navbar expand="lg" className="bg-primary px-5 py-4 position-fixed w-100 top-0" style={{zIndex:'1'}} >
    <Container fluid>
      <Link to={'/'}><Navbar.Brand href="#" className='text-light fs-2'><FontAwesomeIcon icon={faCartShopping} bounce className='me-2'/>E-CART</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
       <Nav className='ms-auto me-5'>
        <Link to={'/wishlist'}><Button className='btn btn-outline-light rounded'><FontAwesomeIcon icon={faHeart} className='me-2' />Wishlist  <Badge bg="light"  className='ms-1 rounded'>{wishlistArray.length}</Badge></Button></Link>
        <Link to={'/cart'}><Button className='btn btn-outline-light rounded ms-5 me-5'><FontAwesomeIcon icon={faCartPlus} className='me-2' />Carts  <Badge  bg="light" className='ms-1 rounded'>{cartArray.length}</Badge></Button></Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
