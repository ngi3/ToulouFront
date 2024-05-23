import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
/*import img1 from './Components/Assets/logo.svg';*/
import logo from '../Assets/frame39570.png';

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form>
            {/* <img src={img1}/> */}
            {/* <h1>Connexion</h1> */}
            <div className='toulou'>
                <img src={logo} alt="" />
            </div>
            <div className="input-box">
                <label>Entrez votre identifiant</label><input type="text" placeholder='Identifiant' required />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
            <label>Entrez votre mot de passe</label><input type="password" placeholder='Mot de passe' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
            <input type='checkbox'/><label>Se souvenir de moi</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type='submit'>Se connecter</button>

            
        </form>
    </div>
  );
};

export default LoginForm;