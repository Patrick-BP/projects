import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className='d-flex flex-column align-items-center justify-content-center containerheight ' >
      <div className='bigtitle'> 5 Star Getaway</div>
      <div className='slogan'>There is only one Boss. The Guest</div>
      <button className='btn mt-5' onClick={()=>navigate('/home')}>Get Started</button>
      </div>
  )
}
