import Styles from '../CSS/Header.module.css'
import logo from '../img/logouc3.png'
import  { React, useState } from 'react';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (

    <header>
        <div className={Styles.logo}>
            <img src={logo} />
        </div>

        <nav className={Styles.menu}>
            <ul>
                <li> <a href='#home'>Home</a></li>
                <li><a href='#sobre'>Sobre nós</a></li>
                <li> <a href='#contato'>Contato</a></li>
                <li> <a href='#'>Registre-se</a></li>

                <button onClick={toggleMenu}><svg className={Styles.mobilemenuicon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg></button>
            </ul>

        </nav>

        <div className={`${Styles.mobilemenu} ${isMenuOpen ? Styles.open : ''}`}>
            <ul>
                <li className={Styles.navitem}><a href="#home" className={Styles.navlink}>Home</a></li>
                <li className={Styles.navitem}><a href="#sobre" className={Styles.navlink}>Sobre nós</a></li>
                <li className={Styles.navitem}><a href="#contato" className={Styles.navlink}>Contato</a></li>
                <li className={Styles.navitem}><a href="#dirfooter" className={Styles.navlinks}>Registre-se</a></li>
            </ul>
            </div>
    </header>

    )
}


export default Header;
