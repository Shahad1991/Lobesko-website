import {useState} from 'react'
import { Link } from 'react-router-dom'
import './forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase'
import {useHistory} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
import {FaEyeSlash, FaEnvelope} from "react-icons/fa";


function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const history = useHistory()
  
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          history.push('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      history.push('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
    <div className='center'>
      <div className='auth'>
      <br></br>
      <br></br>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
        <br></br>
          <input 
            type='email' 
            value={email}
            required
            placeholder="                    Indsæt din email address"
            onChange={e => setEmail(e.target.value)}/>
            <FaEnvelope className='iconi'/>

          <input 
            type='password'
            value={password}
            required
            placeholder='                    Indsæt din password'
            onChange={e => setPassword(e.target.value)}/>
            <FaEyeSlash className='iconas'/>
          
            <button type='submit'>Login</button>
        </form>
        <br></br>
        <p>
          Don't have and account? 
          <Link to='/register'>Create one here</Link>
        </p>
        <br></br>
        <br></br>
      </div>
      
    </div>
  )
  

}

export default Login