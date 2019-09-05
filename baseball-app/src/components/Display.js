import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from '../hooks/useInput';

const Display = () => {

    const [strikes, setStrikes] = useInput(0);
    const [balls, setBalls] = useInput(0);


    return (
        <div className="display-container">
            <h1 className="title">BASEBALL!</h1>
            <div className = "display-inner">
                <div className="strike-div">
                    <h2>Strikes</h2>
                    <h3>{strikes}</h3>
                </div>
                <div className="ball-div">
                    <h2>Balls</h2>
                    <h3>{balls}</h3>
                </div>
            </div>

        </div>
    );


}

export default Display;