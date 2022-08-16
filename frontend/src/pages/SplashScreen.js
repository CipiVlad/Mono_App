import React from 'react'
import { useNavigate } from 'react-router-dom'


const SplashScreen = () => {
  const navigate = useNavigate()


  return (
    <div>
      <h1 onClick={() => navigate('/onboarding')}>Mono</h1>
    </div>
  )
}

export default SplashScreen