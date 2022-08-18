import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import "../Splashscreen.scss";
>>>>>>> 48806ad1effb388b5760e182dc76fc56529616c0

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/onboarding")} className="splashscreen">
      <h1>mono</h1>
    </div>
  );
};

export default SplashScreen;
