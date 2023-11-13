import './TilFøj.css';
import React from "react";
import {useAuthValue} from './AuthContext';
import Java from './Java';
import left from './images/venster.png';
import logo from './images/logo.svg';
import opload from './images/opload.png';



function TilFøj() {
   return (
        <>
            <main className="main-container">
                <section className="righte">
                    <img className="logo" src={logo} alt="logo" />

                    <div className="registrere-container">
                        <div className="co1">
                          <h1>Hej, Anette!</h1>
                          <h4>Motionsløber</h4>
                        </div>
                   
                        <div className="label-container">
                            <label className="label" for="sko">Tilføj sko:</label>
                            <input className="label-input label-sko" type="text" id="sko" placeholder="Indsæt sko mærke" />
                            <label className="label" for="model navn">Model navn</label>
                            <input className="label-input label-model" type="text" id="model" placeholder="Indtast model navn" />
                            <label className="label" for="beskrivelse">Beskrivelse</label>
                            <input className="label-input label-beskrivelse" type="text" id="beskrivelse" placeholder="Skriv en Beskrivelse"/>
                        </div>

                        <div className="ja-nej-container">
                            <p>Anbefale dette produkt</p>

                            <div className="square yes">
                            </div>
                             <h8>Ja</h8>
                            <div className="square no">
                            </div>
                            <h8>Nej</h8>
                        </div>

                        <div className="star-container1">
                                 <span className="grå-star">&#9733;</span>
                                 <span className="grå-star">&#9733;</span>
                                 <span className="grå-star">&#9733;</span>
                                 <span className="grå-star">&#9733;</span>
                                 <span className="grå-star">&#9733;</span>
                        </div>


                        <img className="opload" src={opload} alt="opload"/>



                        <a href="/blankuser">
                           <button className='tilføj'>Tilføj sko</button>
                        </a>
                    </div>
           
                </section>





                <section className="lefts">

                </section>



            </main>
     
     
        </>
     
     
    )    
    
}
export default TilFøj