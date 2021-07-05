class topbtn extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <button id="scrollBtn" title="Go to top">
                <i class="fas fa-arrow-up"></i>
            </button>

            <button class="open-button" id="openForm">
                <i class="fas fa-comments"></i>
            </button>

            <div class="chat-popup" id="chatForm">
                <form class="form-container">
                    <iframe
                        allow="microphone;"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/15773666-6450-4e2d-8d12-157650feebf3">
                    </iframe>
                    <button type="button" class="btn cancel" id="closeForm">Close</button>
                </form>
            </div>
        `;

        document.getElementById("scrollBtn").addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        document.getElementById("openForm").addEventListener('click', () => {
            document.getElementById("chatForm").style.display = "block";
            document.getElementById("openForm").style.display = "none";
            document.getElementById("closeForm").style.display = "block";
        });

        document.getElementById("closeForm").addEventListener('click', () => {
            document.getElementById("chatForm").style.display = "none";
            document.getElementById("openForm").style.display = "block";
        });
    }
}

customElements.define("top-button", topbtn);
