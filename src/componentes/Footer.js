import Styles from '../CSS/Footer.module.css'
import logo from '../img/logouc3.png'
import linkedin from '../img/LinkedIn.png'
import instagram from '../img/Instagram.png'
import github from '../img/GitHub.png'
import linha from '../img/hr.png'


function Footer() {
    return (
        <footer id='contato'>
            
            <a href='#home'>
            <img className={Styles.logo} src={logo} alt='logo' />
            </a>
           
            <div className={Styles.info}>
                <h5>Fale Conosco</h5>
                <h5>(11)99999-9999</h5>
                <h5>0800 999 0099</h5>
                <h5>E-mail:example@adbank</h5>
            </div>
            <div className={Styles.redes}>
                <img src={linkedin} alt='linkedin' />
                <img src={instagram} alt='linkedin' />
                <img src={github} alt='linkedin' />
            </div>
            
            <div className={Styles.linha}>
                <img src={linha} alt='linha' />
               
                <p>@Copyright 2023 Advanced Bank</p>
            </div>
        </footer>
    )
}
export default Footer