import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import left from '../img/chevron-left.png'
import userprofile from '../img/userProfile.png'
import users from '../img/users.png'
import envelope from '../img/envelope.png'
import shield from '../img/shield.png'
import lock from '../img/lock.png'
import Nav from '../components/Nav'
import ProfilePicture from '../img/ProfilePicture.png'

const Profile = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(userObj => setUserData(userObj))
      .catch(err => console.log(err))
  })

  return (
    <div>
      <div className="profile">
        <div className="topBlueContainer">
          <img src={left} alt="left" />
          <h4>Profile</h4>
        </div>
        {/* <div> */}
        <img src={ProfilePicture} alt="profile picture" className="profilePicture" />
        {/* hier nach Styling wieder reinnehmen */}
        {/* <img src={userData} alt="profile picture" /> */}
        {/* </div> */}
        <h2 className="name">Name {userData}</h2>
        <p className="username">@username</p>
        <div className="profileContent">
          <p> <img src={userprofile} alt="profile icon" />  <Link to="/profile">Account info</Link></p>
          <p> <img src={users} alt="personal profile icon" /> <Link to="/profile">Personal profile</Link> </p>
          <p>  <img src={envelope} alt="message" /> <Link to="/profile">Message center</Link></p>
          <p>  <img src={shield} alt="shield" /> <Link to="/profile">Login and security</Link> </p>
          <p>  <img src={lock} alt="lock" /> <Link to="/profile">Data and privacy</Link></p>
          <p>  <img src={lock} alt="lock" /> <Link to="/profile">Log Out</Link></p>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Profile