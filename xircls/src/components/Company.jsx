import React from 'react'
import { useNavigate } from 'react-router-dom'

const Company = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <>
            <div className='container display-2'>company details page</div><br></br>
            <button onClick={handleClick}> Go Back to Home</button>
            </>
    )
}

export default Company