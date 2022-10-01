const sign_in = document.querySelector(".signInButton button");
const close_screen = document.querySelector(".screenAnimation");

sign_in.onclick = ()=>{
    close_screen.classList.add("closeScreen");
} 

const sign_up = document.querySelector(".signUpButton button");
sign_up.onclick = ()=>{
    close_screen.classList.add("closeScreen");
} 