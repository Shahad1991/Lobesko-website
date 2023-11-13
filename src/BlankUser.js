import './BlankUserStyles.css'
import React from "react";
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import left from './images/venster.png'
import logo from './images/logo.svg'
import fav1 from './images/fav1.png'
import fav2 from './images/fav2.png'
import fav3 from './images/fav3.png'
import skobillede1 from './images/1.png'



function Profile() {
    const {currentUser} = useAuthValue();
  
    return (
        <>
        <div class="main-container">
        <section class="rights">
          <img class="logo" src={logo} alt="logo" />

            <div class="container">

                <div class="gruppe1">
                    <div class=" co1">
                        
                        <h1>Hej, Anette!</h1>
                        <h4>Motionsløber</h4>
                        <img src={skobillede1} alt="skobillede--" />
                    </div>

                    
                    <div class=" co2">
                        <h6> Nike air force 1´07</h6>

                        <div class="star-container">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                        </div>
                        <a href="/tilføj">
                            <button class='tilføj'>Tilføj sko</button>
                        </a>
                    </div>
                </div>

                
                <div class="gruppe2">
                    <div class="beskrivelse-container">
                        <div class=" beskrivelse">
                            <h5 class="bes">Beskrivelse</h5>
                            <br></br>
                            <br></br>
                            <p>Infinity 4 GTX er dine go-to til de dage, 
                               hvor regnen siler og vinden hyler, 
                               men dine løbebehov skal stadig opfyldes, 
                               uanset hvor dystert det ser ud derude. 
                               Den er lagdelt med vandtæt GORE-TEX overalt, 
                               fremhævet af en varm meleret krave til at holde dine fødder tørre, 
                               når vejret er vådt og køligt. 
                               Kombiner de isolerende egenskaber med vores Nike ReactX-skum, som giver dig 13% mere energiudbytte sammenlignet med React Nike-skummet (Hvad er mere?) Nike ReactX reducerer mellemsålens CO2-aftryk med mindst 43% sammenlignet med React Nike-skummet, så det hjælper også med at passe på planeten. Og du vil opsøge og suse gennem vandpytter på dine løbeture.


                                

                            </p>

                        </div>
                        <a href="/skoside">
                            <button class='find'>Find sko</button>
                        </a>
                    </div>
                </div>
            </div>


    
            <div class="favorit">
                <h4>Mine favorit sko</h4>
                <img src={fav1} alt="skobillede" />
                <img src={fav2} alt="skobillede" />
                <img src={fav3} alt="skobillede" />
                
            </div>


        </section>

        <section class="left">
            <div class="menus">
                <a class="menus" href="/forside">Hjem</a>
                   
            </div>

        </section>
    </div>

        </>
    )
  }
  
export default Profile