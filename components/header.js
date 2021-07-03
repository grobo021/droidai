class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="../index.html#"
                    ><img src="../images/logo.png" height="75px" alt="Logo"
                /></a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="../index.html"
                                >Home</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html#procons">Pros and Cons</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./faq.html">FAQs</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="./gallery.html">Gallery</a>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>    `;
    }
}

customElements.define('header-component', Header);
