import React from 'react'
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate()
  return (
    <div className='m-auto h-[40vh] flex flex-col items-center justify-center'>
      <iframe className='mt-16 scale-[1] w-fit' src="https://lottie.host/embed/0ea8e7f3-b800-4431-8002-b3a1ef27722c/IXVP0XpO5t.json"></iframe>

      <Button variant="contained" color="success" style={{padding:16,margin:26}} onClick={()=>{navigate('/')}}>
        Explore More Items
      </Button>
    </div>
  )
}

export default CheckOut
