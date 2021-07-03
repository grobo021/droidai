class topbtn extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <button id="scrollBtn" title="Go to top">
                <i class="fas fa-arrow-up"></i>
            </button>
        `;

        document.getElementById("scrollBtn").addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
}

customElements.define("top-button", topbtn);
