import lightbox from "./lightbox.js";

// lightbox.activate();

const account_button = document.querySelector(".accountButton button")
const open_account = document.querySelector(".accountGrid")

const blog_button = document.querySelector(".blogButton button")
const open_blog = document.querySelector(".blogGrid");
const sign_in = document.querySelector(".signInButton button");
const close_screen = document.querySelector(".screenAnimation");
const signIn_screen = document.querySelector(".inGrid")
const signUp_screen = document.querySelector(".upGrid")

account_button.onclick = ()=>{
    close_screen.classList.add("closeScreen");
    signIn_screen.classList.remove("openIn");
    signUp_screen.classList.remove("openUp");
    open_blog.classList.remove("openBlog");
    open_account.classList.add("openAccount");
} 

blog_button.onclick = ()=>{
    close_screen.classList.add("closeScreen");
    signIn_screen.classList.remove("openIn");
    signUp_screen.classList.remove("openUp");
    open_blog.classList.add("openBlog");
    open_account.classList.remove("openAccount");

} 

sign_in.onclick = ()=>{
    close_screen.classList.add("closeScreen");
    signIn_screen.classList.add("openIn");
    signUp_screen.classList.remove("openUp");
    open_blog.classList.remove("openBlog");
    open_account.classList.remove("openAccount");

} 

const sign_up = document.querySelector(".signUpButton button");
sign_up.onclick = ()=>{
    close_screen.classList.add("closeScreen");
    signUp_screen.classList.add("openUp");
    signIn_screen.classList.remove("openIn");
    open_blog.classList.remove("openBlog");
    open_account.classList.remove("openAccount");

} 


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





//this controls the content you see inside the lightbox, Don't touch! for overide
// lightbox.show(myButton,);
