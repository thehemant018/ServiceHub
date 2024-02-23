import React from 'react'
import {Link
} from 'react-router-dom';

const BookService = () => {
  return (
    <>
    <div className="addservice-container">
        <h1>Shahpur Furniture</h1>
        <img src="/images/Furniture.jpg" alt="Furniture" />
        <p className="addservice-price">Price: ₹300</p>
        <p><em>* Convenience charge ₹25 will be levy</em></p>
        <div className='bookservice-btn'>
        <Link to="/" className=" discard-button">Discard</Link>
        <Link to="/payment" className="addservice-button ">Add</Link>
        </div>
    </div>
    </>
  )
}

export default BookService
