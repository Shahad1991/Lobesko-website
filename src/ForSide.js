import './ForSide.css'
import React from "react";
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import {AiOutlineHome} from "react-icons/fa";
import logo from './images/logo.svg'
import sko from './images/Sko.svg'

function ForSide() {
   
    return (
      <>

        <div class=" containers">

            <div class="rightn">
               <img class="logo" src={logo} alt="logo" />

            
                <div class="morphing">
                    <div class="word">Din næste løbetur</div>
                    <div class="word">vil aldrig have</div>
                    <div class="word">fløt sig bedre!</div>
                </div>

                <a class="btn" href="/allesko">Se alle sko</a>
    

            </div>


            <div class="venstern">
            <img class="shoes" src={sko} alt="sko" />
    
                <a class="buttons" href="/register">Register</a>  
                <a class="buttons" href="/login">Login</a> 
            </div>





        </div>

      </>

               
    )
}
  
export default ForSide