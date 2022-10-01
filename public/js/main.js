import lightbox from "./lightbox.js";

// lightbox.activate();


// this is for mobile mode
const menu_button = document.querySelector(".menuButton button");
const close_button = document.querySelector(".closeButton button");
const closeOpen = document.querySelector(".closeButton");
const menuClose = document.querySelector(".menuButton");
const dropDown = document.querySelector(".dropDown");
menu_button.onclick = ()=>{
    dropDown.classList.add("activeDrop");
    menuClose.classList.add("activeMenu");
    closeOpen.classList.add("activeClose");
} 

close_button.onclick = ()=>{
    closeOpen.classList.remove("activeClose");
    menuClose.classList.remove("activeMenu");
    dropDown.classList.remove("activeDrop");
}


const sign_in = document.querySelector(".signIn");




//this controls the content you see inside the lightbox, Don't touch! for overide
// lightbox.show(myButton,);
