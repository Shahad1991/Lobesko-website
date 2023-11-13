import './OmOs.css'
import React from "react";
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import {AiOutlineHome} from "react-icons/fa";

import vensters from './images/Venstre.png';
import logo from './images/logo.svg';
import bild1 from './images/bild1.png';
import bild2 from './images/bild2.png';
import bild3 from './images/bild3.png';
import bild4 from './images/bild4.png';
import bild5 from './images/bild5.png';
import bild6 from './images/bild6.png';


function OmOs() {
   
    return (
        <>

            <section class="containeres">
                <div class="right">
                    <a href="/forside"><img class="logo" src={logo} alt="logo" />
                    </a>

                    <h2>Om os</h2>
           
                    <div class="tekst">
                        <h3>Hvem er vi</h3>
                       
                        <h5>Vores Historie:</h5>
                        <br></br>
                        <br></br>
                        <p>Løbesko Guide er din pålidelige kilde til alt, hvad du behøver at vide om løbesko som passer til din løbeskostil . Vores rejse begyndte med en simpel idé: at hjælpe løbere på alle niveauer med at vælge rette løbesko som passer deres løbetype.  Det hele startede med vores tanke for løb og  den rolle, det rigtige par sko kan spille i at forbedre ydeevnen og forhindre skader.</p>
                         <br />
                        <h5>Vores Mission:</h5>
                        <br></br>
                        <br></br>
                        <p>Vores mission på Løbesko Guideer webapp at give dig  information om løbesko, og lægger anmeldelse fra andre løberne som har brugt denne skoene.  Vi ønsker at guide dig gennem processen med at finde det perfekte og rette  løbesko, der passer til din løbestil og behov. Vi tror på at gøre løb til en fornøjelig og givende oplevelse for alle, uanset om du er en nybegynder eller en erfaren atlet.</p>
                        <br />
                        <h5>Hvad Vi Tilbyder:</h5>
                        <br></br>
                        <br></br>
                        <p>Omfattende guider til valg af løbesko til forskellige terræner og stilarter. Ekspertanmeldelser og vurderinger af de nyeste løbesko på markedet.Tips og træningsteknikker for at forbedre din løbeoplevelse.</p>
              
                        <p>Har du spørgsmål eller brug for rådgivning? Vi er her for at hjælpe! Du kan kontakte vores team ved at udfylde vores kontaktformular [ ved at sende en e-mail til vores e-mailadresse. Vi sætter pris på feedback og spørgsmål fra vores brugere og bestræber os på at svare så hurtigt som muligt. 
              
                        Tak for at besøge Løbesko Guide. Vi ser frem til at hjælpe dig med at nå dine løbemål og finde de perfekte løbesko til dig!</p>
                    </div>
                    <br />
                    <h2>Vi er samarbejder  med </h2>
                    
                    <div class="image-container">
                       <img src={bild1} />
                       <img src={bild2} />
                       <img src={bild3} />
                       <img src={bild4} />
                       <img src={bild5} />
                       <img src={bild6} />
                    </div>
                </div> 
                <div class="vensters">
                    <div class="menus">
                        <a class="menus" href="/forside">Hjem</a>
                    </div>
                </div>
    
            </section>

        </>
        
    )
}
  
export default OmOs