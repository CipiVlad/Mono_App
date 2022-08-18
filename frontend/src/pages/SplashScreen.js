import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../SplashScreen.scss';

const SplashScreen = () => {
  const navigate = useNavigate()


  return (
    <div onClick={() => navigate('/onboarding')} className="splashscreen">
      <h1>mono</h1>
    </div>
  )
}

export default SplashScreen