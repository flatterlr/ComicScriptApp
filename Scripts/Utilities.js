"use strict"

$(function(){
    SetYear('#yearTarget'); 
}); 

function SetYear(divTarget){
    let today = new Date();
    let year = today.getFullYear();
    $(divTarget).text(year); 
}