// TYPES OF EVENT HANDLING
//1. onClick - action is performed on clicking
//2. onChange
//3. onSubmit

//1. onClick

import React from "react";

export default function HandlingEvents() {

const handleClick = () =>{
    alert('Button is clicked');
}


  return <div>
    
    <button onClick={handleClick}></button>
    
    </div>;
}


