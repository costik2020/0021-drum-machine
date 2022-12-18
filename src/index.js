import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/main.css";

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



function DrumMachine () {

return (
    <div id="drum-machine" >
        <div id="display"></div>
        <div className="all-pads">
            <div id="uniqueId" className="drum-pad"> Q 
                <audio src="./sound/Heater-1" id="Q" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> W
                <audio src="" id="W" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> E
                <audio src="" id="E" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> A
                <audio src="" id="A" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> S
                <audio src="" id="S" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> D
                <audio src="" id="D" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> Z
                <audio src="" id="Z" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> X
                <audio src="" id="X" className="clip"></audio>
            </div>
            <div id="uniqueId" className="drum-pad"> C
                <audio src="" id="C" className="clip"></audio>
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
