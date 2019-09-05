import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from '../hooks/useInput';

const Dashboard = (props) => {


    return (
        <div className="dashboard-container">
            <button onClick = {props.addStrike}>Strike</button>
            <button onClick = {props.addBall}>Ball</button>
            <button onClick = {props.handleFoul}>Foul</button>
            <button onClick = {props.handleHit}>Hit</button>
        </div>
    );


}

export default Dashboard;