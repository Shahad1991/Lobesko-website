import './SkoSide.css'
import React from "react";
import {useAuthValue} from './AuthContext'
import Java from './Java';
import {FaUserAlt} from "react-icons/fa";
import logo from './images/logo.svg';
import pil from './images/pil.svg';
import hvidpil from './images/pil.png';
import little from './images/little.png';
import big from './images/big.png';
import hjerte from './images/heart.png';
import find from './images/find.svg';
import stare from './images/star-solid.svg';



const hiddenMenu = document.querySelector(".hidden-menu"); // Brug . for at vælge klassen hidden-menu
const lobeTypePil = document.querySelectorAll(".pil"); // Brug . for at vælge klassen pil

lobeTypePil.forEach(pil => {
pil.addEventListener('click', () => {
if (hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") {
// Vis dropdown-menuen
hiddenMenu.style.display = "block";
} else {
        // Skjul dropdown-menuen
        hiddenMenu.style.display = "none";
       }
    });
});


const hiddenAnmeldelse = document.querySelector(".hidden-anmeldelse");
    const anmeldelsePile = document.querySelectorAll(".anmeldelse");

       anmeldelsePile.forEach(anmeldelsePil => {
       anmeldelsePil.addEventListener('click', () => {
       if (hiddenAnmeldelse.style.display === "none" || hiddenAnmeldelse.style.display === "") {
        // Vis dropdown-menuen
        hiddenAnmeldelse.style.display = "block";
        } else {
        // Skjul dropdown-menuen
        hiddenAnmeldelse.style.display = "none";
        }
    });
});


function SkoSide() {
   
    
    return (
     <>
       <a href="/forside"><img class="logo" src={logo} alt="logo" />
       </a>
        <div class="menu">
           <a class="menu" href="/login">Login</a><FaUserAlt className='logico'/>
           <a class="menu" href="/OmOs">Om Os</a> 
           <a class="menu" href="/forside">Hjem</a>
       </div>
       

       <div class="central-menu">
        <div class="løbetype">
            <h6>Løbetype</h6>
            <img class="pil" src={hvidpil} alt="pil" />
        </div>
        <h6 class="motionsløbere">Motionsløbere</h6>
    </div>
    <div class="hidden-menu">
        <ul>
            <li>Motionsløber</li>
            <li>Fritidsløbere</li>
            <li>Skovløbere</li>
            <li>Baneløbere</li>
            <li>Sprint</li>
        </ul>
    </div>


    <main class="container-sko">
        <div class="little-fotos">
            <img src={little} alt="sko" />
            <img src={little} alt="sko" />
            <img src={little} alt="sko" />
        </div>

        <div class="big-foto">
            <img class="big" src={big} alt="sko" />
            <div class="tilføj-favorit">
                <h4 class="content">Tilføj som favorit</h4>
                <span><img class="hjerte-ikone" src={hjerte} />
                </span>
            </div>

            <div class="star-container">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
            </div>


        </div>

        <div class="info">
            <h1>Nike air force 1´07</h1>
            <h2>Bæredygtige materialer</h2>
            <h3>Fra 1500 DK</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                tempor incidunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
            </p>


            <div class="gruppe">
                <h5>find i butik</h5>
                <img class="placering" src={find} />

            </div>


            <div class="gruppe">
                <h5>Bedømelse</h5>
                <h5 class="number">(53)</h5>


            </div>

            <div class="gruppe">
                <h5>Anmeldelse</h5>
                <img class="anmeldelse" src={pil} />
            </div>
            <div class="hidden-anmeldelse">
                <h2>Skriv anmeldelse...</h2>
                <input type="text" id="name" name="name" placeholder="Skriv anmeldelse" />

                <div class="bild">
                    <span class="stars">
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                    </span>
                    <h2 class="bedøme">5 Stjerner</h2>
                </div>



                <div class="bedøm">
                    <h3>Emil Hensen</h3>
                    <span class="stars">
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                    </span>
                    <data class="date">12/09/2023</data>

                    <p>Let me start off by saying these shoes are great. I got my first pair when they were I think
                        the flex 8s i hit a point in life where most shoes aren’t comfortable anymore but these
                        shoes are the most comfortable shoes I’ve ever wore... læs mere</p>
                </div>

                <div class="bedøm">
                    <h3>Emil Hensen</h3>
                    <span class="stars">
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                    </span>
                    <data class="date">12/09/2023</data>

                    <p>Let me start off by saying these shoes are great. I got my first pair when they were I think
                        the flex 8s i hit a point in life where most shoes aren’t comfortable anymore but these
                        shoes are the most comfortable shoes I’ve ever wore... læs mere
                    </p>
                </div>



            </div>



        </div>
       

    </main>
    <main class="container-sko">
        <div class="little-fotos">
            <img src={little} alt="sko" />
            <img src={little} alt="sko" />
            <img src={little} alt="sko" />
        </div>

        <div class="big-foto">
            <img class="big" src={big} alt="sko" />
            <div class="tilføj-favorit">
                <h4 class="content">Tilføj som favorit</h4>
                <span><img class="hjerte-ikone" src={hjerte} />
                </span>
            </div>

            <div class="star-container">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
            </div>


        </div>

        <div class="info">
            <h1>Nike air force 1´07</h1>
            <h2>Bæredygtige materialer</h2>
            <h3>Fra 1500 DK</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                tempor incidunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
            </p>


            <div class="gruppe">
                <h5>find i butik</h5>
                <img class="placering" src={find} />

            </div>


            <div class="gruppe">
                <h5>Bedømelse</h5>
                <h5 class="number">(53)</h5>


            </div>

            <div class="gruppe">
                <h5>Anmeldelse</h5>
                <img class="anmeldelse" src={pil} />
            </div>


            <div class="hidden-anmeldelse">
                <h2>Skriv anmeldelse...</h2>
                <input type="text" id="name" name="name" placeholder="Skriv anmeldelse" />

                <div class="bild">
                    <span class="stars">
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                    </span>
                    <h2 class="bedøme">5 Stjerner</h2>
                </div>



                <div class="bedøm">
                    <h3>Emil Hensen</h3>
                    <span class="stars">
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                    </span>
                    <data class="date">12/09/2023</data>

                    <p>Let me start off by saying these shoes are great. I got my first pair when they were I think
                        the flex 8s i hit a point in life where most shoes aren’t comfortable anymore but these
                        shoes are the most comfortable shoes I’ve ever wore... læs mere</p>
                </div>

                <div class="bedøm">
                    <h3>Emil Hensen</h3>
                    <span class="stars">
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                        <img class="icO" src={stare} />
                    </span>
                    <data class="date">12/09/2023</data>

                    <p>Let me start off by saying these shoes are great. I got my first pair when they were I think
                        the flex 8s i hit a point in life where most shoes aren’t comfortable anymore but these
                        shoes are the most comfortable shoes I’ve ever wore... læs mere</p>
                </div>



            </div>


        </div>





    </main>



   

     
     
     
     
     </>

                
    )
}
  
export default SkoSide