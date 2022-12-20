import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/main.css";
import {useEffect} from 'react';
import {useState} from  'react';


// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


function playAudioClip(e){
    
    console.log("e.target.textContent=", e.target.textContent);
    let clickedKey = e.target.textContent.trim();
    console.log("clickedKey=", clickedKey);

    let audio = document.getElementById(clickedKey);
    console.log("audio=", audio);
   
    // Print the name of the audio file into the div element with the id of "display"
    let srcValue = audio.getAttribute("src");
    // console.log("value=", srcValue);
    const regex = /\/.*\./g;
    const found = srcValue.match(regex);
    // console.log("found=", found);
    let foundString = found[0];
    let fileTitle = foundString.slice(0+1, foundString.length-1);
    // console.log("fileTitle=", fileTitle);
    let display = document.getElementById("display");
    display.textContent = fileTitle;





    // Play the audio file sound through the earphones
    audio.play();
    

}



function handleKeyPress(e) {
    //console.log( "You pressed a key." );
    //console.log("e.key", e.key);

    console.log("You pressed=", e.key);

    let pressedKey = e.key.toUpperCase();
    let audio = document.getElementById(pressedKey);
    console.log("audio=", audio);

    audio.play();
    

}	






function DrumMachine () {

const [display, setDisplay] = useState("...");


// Detect what key was pressed 
useEffect( ()=>{
    document.addEventListener("keydown", handleKeyPress, true);
} );

   




return (
    <div id="drum-machine" >
        <div id="display">{display}</div>
        <div className="all-pads" >
            <div id="header-1" className="drum-pad" onClick={playAudioClip}> Q 
                <audio src="sounds/Heater-1.mp3" id="Q" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> W
                <audio src="sounds/Heater-2.mp3" id="W" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> E
                <audio src="sounds/Heater-3.mp3" id="E" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> A
                <audio src="sounds/Heater-4.mp3" id="A" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> S
                <audio src="sounds/Clap.mp3" id="S" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> D
                <audio src="sounds/Open_HH.mp3" id="D" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> Z
                <audio src="sounds/Kick_and_Hat.mp3" id="Z" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> X
                <audio src="sounds/Kick.mp3" id="X" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad" onClick={playAudioClip}> C
                <audio src="sounds/Close_HH.mp3" id="C" className="clip"></audio>
            </div>
        </div>
    </div>

);

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
