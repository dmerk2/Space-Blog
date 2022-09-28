export default class lightbox{
    static activate(){
        // set display to none if overiding <style="display:none;">
        document.body.insertAdjacentHTML("beforeend",  `
            <div class="lightbox" id="lightbox">
                <div class="lightbox__inner">
                    <button type = button class="lightbox__close">
                        &times;
                    </button>
                    <div class="lightboxcontainer">
                        <div class="leftbackground">
                            <img src="./img/lightbox_side.png" alt="">
                        </div>
                        <div class="lightbox__content">
                            <h2>Sign In</h2>
                            <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                            class="form-element"
                          />
                        </div>
                    </div>    
                </div>
            </div>
        `);
        
        const lightBox = document.querySelector("#lightbox");
        const btnClose = lightBox.querySelector(".lightbox__close");
        const content = lightBox.querySelector(".lightbox__content");
        const closeLightbox = () =>{
            lightBox.style.display="none";
            content.innerHTML = "";
        };
        //this makes it so you if you click outside of the box, it closes
        // lightBox.addEventListener("mousedown", e =>{
        //     //must be here for box not to close on anyclick
        //     if(e.target.matches("#lightbox")){
        //         closeLightbox();
        //     }
        // });

        btnClose.addEventListener("click", () =>{
            closeLightbox();
        });
    }
    //dont touch! overides lightbox display 
    // static show(htmlorElement){
    //     const content = document.querySelector("#lightbox .lightbox__content");

    //     document.querySelector("#lightbox").style.display = null;

    //     if(typeof htmlorElement === "string"){
    //         content.innerHTML = htmlorElement;
    //     }else{
    //         content.innerHTML = "";
    //         content.appendChild(htmlorElement);
    //     }
    // }
}