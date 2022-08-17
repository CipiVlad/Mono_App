import React from 'react'
import { useNavigate } from 'react-router-dom'


const SplashScreen = () => {
  const navigate = useNavigate()


  return (
    <div onClick={() => navigate('/onboarding')}>
      <h1>Mono</h1>
    </div>
  )
}

export default SplashScreen