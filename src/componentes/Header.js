
import Styles from '../CSS/Header.module.css'
import logo from '../img/logouc3.png'



function Header() {
    return (
        <header>
            <div className={Styles.logo}>
                <img src={logo} />
            </div>

            <nav className={Styles.menu}>
                <ul>
                    <li>Home</li>
                    <li><a href='#sobre'>Sobre nós</a></li>
                    <li> <a href='#contato'>Contato</a></li>
                    <li>Registre-se</li>
                </ul>
            </nav>
        </header>

    )
}


export default Header;
