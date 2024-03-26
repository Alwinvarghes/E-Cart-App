import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='w-100 justify-content-center align-items-cemter d-flex flex-column mt-5'>
           <div className='w-100 justify-content-evenly d-flex bg-primary text-light p-4'>
           
            <div style={{width:'400px'}}>
            <FontAwesomeIcon icon={faCartShopping} size='2xl' className='me-2'/>
                <span style={{fontSize:'30px'}} className='ms-2'>E-CART</span>
                <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit fugit quis architecto quidem, fuga quo, quos eos, praesentium nulla aliquid soluta dolorum voluptatibus quam. Necessitatibus dolorem fugit voluptates praesentium officiis?</p>
            </div>
            <div className='link'>
               <h4>Link</h4>
               <p className='mt-3'><Link className='text-light' to={'/'}>Home</Link></p>
               <p><Link className='text-light' to={'/Wishlist'}>Wishlist</Link></p>
               <p><Link className='text-light' to={'/Cart'}>Cart</Link></p>
            </div>
            <div className='guides'>
              <h4>Guides</h4>
              <p>React</p>
              <p>React-Bootstrap</p>
              <p>Bootwatch</p>
            </div>
            <div className='contact'>
              <h4>Contacts</h4>
              <div className='d-flex mt-3'>
                <input type="text" className='form-control' placeholder='Enter your Email ID' />
                <button className='btn btn-warning ms-2'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-around mt-3 pt-2'>
              <FontAwesomeIcon icon={faInstagram} size='2xl'/>
              <FontAwesomeIcon icon={faFacebook} size='2xl' />
              <FontAwesomeIcon icon={faTwitter}  size='2xl'/>
              <FontAwesomeIcon icon={faLinkedin}  size='2xl'/>
              </div>
            </div>
           </div>
           </div>
           
           
  )
}
export default Footer
