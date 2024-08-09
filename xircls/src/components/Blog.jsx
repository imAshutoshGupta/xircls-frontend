import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
    const navigate = useNavigate()
  
  return (
    <>
    <div className='container display-2'>Blog & Partners page</div><br></br>
    <button onClick={()=>navigate('/')}>Go Back to home</button>
    </>
  )
}

export default Blog