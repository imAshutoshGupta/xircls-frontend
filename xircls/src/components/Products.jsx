import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
      };

  return (
    <>
    <div className='container display-2'>Product details page</div> <br></br>
        <button onClick={handleClick}>Go Back</button>
        </>
    
  )
}

export default Products