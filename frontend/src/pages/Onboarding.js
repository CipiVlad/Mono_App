import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div>
      <div>
        <img src="" alt="the määän" />
      </div>
      <div>
        <h1>Spend Smarter Save More</h1>
        <Link to="/signup">Get Started</Link>
        <p>Already Have An Account ? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  )
}

export default Onboarding