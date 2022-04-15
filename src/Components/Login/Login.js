import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firabase/Firabase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const hendelEmail = (event) =>{
          setEmail(event.target.value)
          
      }
      const hendelUser = (event) =>{
          setUser(event.target.value)
          
      }
    


    const submit =(event) =>{
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submit} className="form card">
  <div className="card_header">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
    </svg>
    <h1 className="form_heading">Sign in</h1>
  </div>
  <div className="field">
    <label for="username">Username</label>
    <input onBlur={hendelUser} className="input" name="username" type="text" placeholder="Username" id="username" required/>
  </div>
  <div className="field">
    <label for="email">Email</label>
    <input onBlur={hendelEmail} className="input" name="user_Email" type="text" placeholder="Email" id="Email" required/>
  </div>
  <div className="field">
    <label for="password">Password</label>
    <input className="input" name="user_password" type="password" placeholder="Password" id="password" required/>
  </div>
  <div className="field">
    <button className="button">Login</button>
  </div>
</form>
        </div>
    );
};

export default Login;