"use strict";
//Self executing annynymous fuction
// IIFE - Immediately Invoked Fuction Expression
(function(){

    //functional variable
    let functionalVar = 1;
    //event listener
    window.addEventListener("load",Start);

    function Start(){
        //Local variable
        let localVar = 1;
        console.log("App Started.." + functionalVar);
        console.log(`%cApp Started..${functionalVar}`,"font size:20; color: blue");
    }
})();

//Inline fucntion
window.addEventListener("load",function(){
    //code line
})

//lambda function
window.addEventListener("load",() => {
    //code line
})

//Global variable
let globalVar = 1;