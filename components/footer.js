class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <h4 class="text-uppercase footerText">
                        DROID <span class="footerWhiteText">AI</span>
                    </h4>
                    <p class="footerWhiteText">
                        Rishab Arora<br />
                        OPG World School.
                    </p>
                </div>

                <hr class="clearfix w-100 d-md-none pb-3" />

                <div class="col-md-6 mb-md-0 mb-3">
                    <h5 class="text-uppercase footerWhiteText">Links</h5>

                    <ul class="list-unstyled">
						<li>
							<a href="../index.html#services" class="footerLinks">Services</a>
						</li>
						<li>
							<a href="../index.html#procons" class="footerLinks">Pros & Cons</a>
						</li>
                        <li>
						    <a href="./faq.html" class="footerLinks">FAQs</a>
						</li>
                        <li>
                        <a href="./gallery.html" class="footerLinks">Gallery</a>
                    </li>
						<li>
							<a href="./contact.html" class="footerLinks">Contact Us</a>
						</li>
					</ul>
                </div>
            </div>
        </div>

        <div class="footer-copyright text-center py-3">
            <p id="copyright" style="text-align: center"></p>
        </div>
        </footer>`;
    }
}

customElements.define('footer-component', Footer);
