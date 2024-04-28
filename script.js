let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let redspan = document.querySelector(".redspan");
let greenspan = document.querySelector(".greenspan");
let bluespan = document.querySelector(".bluespan");
let wrapper= document.querySelector(".wrapper");
let redd;
let greenn;
let blueee;
red.addEventListener("input",()=>
{
    redspan.textContent=red.value;
     redd=redspan.textContent;
     wrapper.style.backgroundColor= `rgb(${redd},${green.value},${blue.value})`;
})
green.addEventListener("input",()=>
{
    greenspan.textContent=green.value;
    greenn=greenspan.textContent;
    wrapper.style.backgroundColor= `rgb(${red.value},${greenn},${blue.value})`;
})
blue.addEventListener("input",()=>
{
    bluespan.textContent=blue.value;
    blueee= bluespan.textContent;
    wrapper.style.backgroundColor= `rgb(${red.value},${green.value},${blueee})`;
})


