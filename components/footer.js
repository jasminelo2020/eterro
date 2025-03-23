class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            footer {
                /* text-align: center; */
                color: #333;
                background: #fff;
                /* padding: 20px 0; */
                /* make footer sticky */
                /* position: fixed; */ 
                bottom: 0;
                /* width: 100%; */
                display: flex;
                /* justify-content: flex-end; */
                /* justify-content: space-between; */
                align-items: center;
                padding-left: 0px;
                padding-right: 0px;
            }

            footer nav li {
                list-style: none;
                padding: 0;
            }

            /* footer nav ul li {
                display: inline-block;
                font-size: 10px;
            } */

            /* nav {
                display: flex;
            } */

            .copyright {
                flex: 1;
                justify-content: flex-start;
                font-size: 10px;
                padding-left: 20px;
            }

            .contact {
                flex: 1;
                justify-content: flex-end;
                font-size: 10px;
                text-align: right;
                padding-right: 20px;
            }

            .contact li a:hover{
                color:#bcbaba;
            }
        </style>
        <footer>
            <nav class="copyright">
                <p>&copy; 2025 eterro LLC. All rights reserved.</p>
            </nav>
            <nav class="contact">
                <li><a href="contact.html">CONTACT</a></li>
            </nav>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);