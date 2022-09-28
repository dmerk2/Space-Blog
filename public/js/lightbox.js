export default class lightbox{
    static activate(){
        document.body.insertAdjacentHTML("beforeend", `
            <div class="lightbox" id="lightbox">
                <div class="lightbox__inner">
                    <button type = button class="lightbox__close">
                        &times;
                    </button>
                    <div class="lightbox__content">
                        the main content
                    </div>
                </div>
            </div>
        `);
    }
}