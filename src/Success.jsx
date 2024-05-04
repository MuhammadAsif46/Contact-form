import React from 'react'
import successImage from "./assets/success.png"

const Success = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]' >
        <img src={successImage} alt="success" width={300}/>
    </div>
  )
}

export default Success