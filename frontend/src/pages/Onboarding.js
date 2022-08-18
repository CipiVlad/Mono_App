import { Link } from "react-router-dom";
import "../Onboarding.scss";
import Guy from "../img/Guy.png";
import Coin from "../img/Coin.png";
import Donut from "../img/Donut.png";

const Onboarding = () => {
  return (
    <div className="onboarding">
      <div>
        <img src={Coin} alt="coin" className="coin" />
        <img src={Donut} alt="coin" className="donut" />
        <img src={Guy} alt="the määän" />
      </div>
      <div>
        <h1>Spend Smarter</h1>
        <h1>Save More</h1>
        <button>
          <Link to="/login">Get Started</Link>
        </button>
        <p>
          Have No Account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
