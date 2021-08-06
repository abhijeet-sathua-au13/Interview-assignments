import { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [wantRegister, setWantRegister] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <>
      <div class={`container ${wantRegister ? 'right-panel-active' : ''}`} id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" name="name" id="name" onChange={(e) => {
                setName(e.target.value)
            }} value={name}/>
            <input type="email" placeholder="Email" name="email" id="email" onChange={(e) => {
                setEmail(e.target.value)
            }} value={email}/>
            <input type="password" placeholder="Password" name="password" id="password" onChange={(e) => {
                setPassword(e.target.value)
            }} value={password}/>
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick = {() => {
                  setWantRegister(false)
              }}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={() => {
                  setWantRegister(true)
              }}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
        <p>
          Created with <i class="fa fa-heart"></i> by
          <a  href="#">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            
            href="#"
          >
            here
          </a>
          .
        </p>
      </footer> */}
    </>
  );
};


export default Auth;