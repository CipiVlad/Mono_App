import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleLogIn(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        navigate('/')
        // fetch kommt hier rein !!
    }

    return (
        <div>
            <h1>Login</h1>
            <img src="" alt="the määään" />
            <form >
                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" placeholder="Email" min="5" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" id="password" placeholder="Password" min="8" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleLogIn}>Login</button>
                {/* ONCLICK FEHLT NOCH... */}
            </form>
            <p>Have No Account? <Link to="/signup">Sign Up</Link> </p>
        </div>
    )
}

export default Login