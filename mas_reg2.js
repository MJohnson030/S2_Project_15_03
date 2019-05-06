"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author:  Millione Johnson
   Date: 5/5/19   


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", writeSessionValues);

//calls all of the document by different element ID's, sets the textContent of each span elements to the sesssionStorage variables, essentially writing each one of the data values into the registration summary form.
function writeSessionValues() {

     document.getElementById("regName").textContent = sessionStorage.confName;
     document.getElementById("regGroup").textContent = sessionStorage.confGroup;
     document.getElementById("regEmail").textContent = sessionStorage.confMail;
     document.getElementById("regPhone").textContent = sessionStorage.confPhone;
     document.getElementById("regSession").textContent = sessionStorage.confSession;
     document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
     document.getElementById("regPack").textContent = sessionStorage.confPack;

     document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}
