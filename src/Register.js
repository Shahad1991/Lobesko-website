import {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import './forms.css'
import {auth} from './firebase'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './AuthContext'
import {FaEyeSlash, FaEnvelope, FaRunning, FaSortDown, FaUserAlt} from "react-icons/fa";

function Register() {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [option, setOption] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
  const {setTimeActive} = useAuthValue()
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            history.push('/verify-email')
          }).catch((err) => alert(err.message))
        })
      }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <br></br>
        <h1>Register</h1>
        <br></br>
        <p>Hvis du alerede have en konto kan du Log ind her !</p>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
            <input 
            type='email' 
            value={email}
            placeholder="                     Indsæt din email address"
            required
            onChange={e => setEmail(e.target.value)}/>
            <FaEnvelope className='icon'/>

            <input 
            type='username' 
            value={username}
            placeholder="                     Indsæt dit navn/efternavn"
            required
            onChange={e => setUsername(e.target.value)}/>
            <FaUserAlt className='icons'/>

           <input 
            type='password'
            value={password} 
            required
            placeholder='                     Indsæt dit password'
            onChange={e => setPassword(e.target.value)}/>
            <FaEyeSlash className='icone'/>
        
            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='                    Gentage dit password' 
            onChange={e => setConfirmPassword(e.target.value)}/>
            <FaEyeSlash className='icones'/>

            <input 
            type='option'
            value={option} 
            required
            placeholder='                     Vælg kategori'
            onChange={e => setOption(e.target.value)}/>
            <FaRunning className='icona'/>


            
            <button type='submit'>Register</button>
            <br></br>
        </form>
        <span>
         Har du allerede en bruger?  
          <Link to='/login'>login</Link>
        </span>
        <br></br>
      </div>
    </div>
  )
  
}

export default Register