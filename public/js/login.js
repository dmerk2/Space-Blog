const sign_in = document.querySelector(".signInButton button");
const close_screen = document.querySelector(".screenAnimation");
const signIn_screen = document.querySelector(".inGrid")
const signUp_screen = document.querySelector(".upGrid")

sign_in.onclick = ()=>{
    close_screen.classList.add("closeScreen");
    signIn_screen.classList.add("openIn");
    signUp_screen.classList.remove("openUp");
} 

const sign_up = document.querySelector(".signUpButton button");
sign_up.onclick = ()=>{
    close_screen.classList.add("closeScreen");
    signUp_screen.classList.add("openUp");
    signIn_screen.classList.remove("openIn");
} 