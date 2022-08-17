import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [picture, setPicture] = useState() // nicht sicher wie ich den FileUpload machen soll und was im Usestate erwartet wird 

    const navigate = useNavigate()

    function handleSignUp(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        navigate('/')
        // fetch kommt hier rein !!
    }


    return (
        <div>
            <h1>Sign Up</h1>
            <form >
                <label htmlFor="name">NAME</label>
                <input type="email" name="name" id="name" placeholder="Full Name" min="5" required value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" placeholder="Email" min="5" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" id="password" placeholder="Password" min="8" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="picture">PROFILE PICTURE</label>
                <input type="file" name="picture" id="picture" value={picture} onChange={(e) => setPicture(e.target.value)} />

                <button onClick={handleSignUp}>Sign Up</button>
                {/* ONCLICK FEHLT NOCH... */}
            </form>
            <p>Already Have An Account? <Link to="/login">Log In</Link> </p>
        </div>
    )
}

export default SignUp