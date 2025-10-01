class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            header {
                position: sticky;
                top: 0;
                background: #fff;
                color: #333;
                padding: 1rem 0;
                text-align: center;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 20px;
                padding-right: 20px;
            }

            header nav {
                display: flex;
                position: relative;
                /* white-space: nowrap; */
            }

            nav ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
            }

            nav ul li {
                margin: 0 15px;
            }

            nav ul li a {
                color: #333;
                text-decoration: none;
            }

            header nav ul li a:hover{
                color:#bcbaba;
            }

            .nav-left {
                flex: 1;
                justify-content: flex-start;
            }

            #capsule-items{
                position: relative;
                list-style: none;
            }

            #capsule-items a:hover{
                color:#bcbaba;
            }

            #dropdown-items {
                display: none;
                position: absolute;
                font-size: 11px;
                white-space: nowrap;
                background-color: #fff;
            }

            #dropdown-items li {
                margin: 5px 0px;
            }

            .nav-left #dropdown-items li {
                margin-right: 5px;
            }

            .nav-right #dropdown-items li {
                margin-left: 5px;
            }
            
            #capsule-items:hover #dropdown-items {
                display: block;
                text-align: left;
                left: 0px;
                padding:0;
            }

            #dropdown-items {
                animation: animateToBottom .3s;
            }

            @keyframes animateFromBottom {
                from {
                transform: translate3d(0, 10px, 0);
                opacity: 0
                }
                to {
                transform: translate3d(0, 0, 0);
                opacity: 1
                }
            }

            @keyframes animateToBottom {
                from {
                transform: translate3d(0, -5px, 0);
                opacity: 1
                }
                to {
                    transform: translate3d(0, 0, 0);
                    opacity: 1
                }
            }

            #store-items{
                position: relative;
            }
            
            #store-items:hover #dropdown-items {
                display: block;
                text-align: right;
                right: 0px;
                padding: 0;
            }

            .hamburger-menu {
                display: none;
            }

            .hamburger {
                display: none;
            }

            /* Mobile Screens */
            @media only screen and (max-width: 768px) {
                header {
                    text-align: left;
                    padding-left: 10px;
                    padding-right: 10px;
                    display: flex;
                }

                h1 {

                }

                nav {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }

                nav ul {
                    display: none; 
                }

                nav ul li {
                    margin: 10px 0;
                }

                #capsule-items, #store-items {
                    width: 100%;
                    text-align: left;
                }

                /* Show the menu when active */
                .nav-left.responsive {position: relative;}
                .nav-left.responsive a.hamburger-menu {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .nav-left.responsive a {
                    float: none;
                    display: block;
                    text-align: left;
                }

                .hamburger-menu {
                    // flex: 1;
                    // justify-content: flex-start;
                    display: flex;
                    cursor: pointer;
                    font-size: 20px;
                    margin-left: 10px; /* Align hamburger icon to the left */
                }

                // .hamburger {
                //     display: flex;
                // }
            }
        </style>
        <header>
            <div class="hamburger-menu" id="icon" onclick="toggleMenu()">&#9776;</div>
            <nav class="nav-left" id="topnav">
                <ul id="menu-items">
                    <li id="capsule-items"><a href="capsule-3.html">capsule</a>
                        <ul id="dropdown-items">
                            <li><a href="capsule-3.html">capsule 3</a></li>
                            <li><a href="capsule-2.html">capsule 2</a></li>
                            <li><a href="capsule-1.html">capsule 1</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <h1 class="title"><a href="index.html">ETERRO</a></h1>
            <nav class="nav-right" id="topnav">
                <ul id="menu-items">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="account.html">ACCOUNT</a></li>
                    <li id="store-items"><a href="store.html">STORE</a>
                        <ul id="dropdown-items">
                            <li><a href="store.html">all items</a></li>
                            <li><a href="store.html#eterro-homme">eterro homme</a></li>
                            <li><a href="store.html#eterro-essentials">eterro essentials</a></li>
                            <li><a href="store.html#accessories">accessories</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <script>
        </script>
      `;
    }
  }
  
  customElements.define('header-component', Header);