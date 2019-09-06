import React, { Component, useState, useEffect } from "react";


const Display = (props) => {

    return (
        <div className="display-container">
            <h1 className="title">BASEBALL</h1>
            <div className = "display-inner">
                <div className="strike-div">
                    <h2>Strikes</h2>
                    <h3>{props.strikes}</h3>
                </div>
                <div className="ball-div">
                    <h2>Balls</h2>
                    <h3>{props.balls}</h3>
                </div>
                <div className="out-div">
                    <h2>Outs</h2>
                    <h3>{props.outs}</h3>
                </div>
                <div className="score-div">
                    <h2>Runs</h2>
                    <h3>{props.score}</h3>
                </div>
            </div>

        </div>
    );


}

export default Display;