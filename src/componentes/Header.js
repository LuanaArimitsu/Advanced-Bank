import Styles from '../CSS/Header.module.css'
import logo from '../img/logouc3.png'
import React, { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <header>
            <nav>
                <div className={Styles.logo}>
                    <img src={logo} />
                </div>


                <ul>
                    <li> <a href='#home'>Home</a></li>
                    <li><a href='#sobre'>Sobre nós</a></li>
                    <li> <a href='#contato'>Contato</a></li>
                    <li> <a href='#'>Registre-se</a></li>
                    <div className={Styles.mobilemenuicon}>
                        <button onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#FFF" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>
                </ul>
            </nav>

            <div className={`${Styles.mobilemenu} ${isMenuOpen ? Styles.open : ''}`}>
                <ul>
                    <li className={Styles.navitem}><a className={Styles.navlink}>Serviços</a></li>
                    <li className={Styles.navitem}><a className={Styles.navlink}>Vantagens</a></li>
                    <li className={Styles.navitem}><a className={Styles.navlink}>Aplicativo</a></li>
                    <li className={Styles.navitem}><a className={Styles.navlinks}>Área do Cliente</a></li>
                </ul>
            </div>

        </header >

    )
}


export default Header;
