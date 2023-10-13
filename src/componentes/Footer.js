import Styles from '../CSS/Footer.module.css'
import logo from '../componentes/Home/img/logouc3.png'
import linkedin from '../componentes/Home/img/LinkedIn.png'
import instagram from '../componentes/Home/img/Instagram.png'
import github from '../componentes/Home/img/GitHub.png'
import linha from '../componentes/Home/img/hr.png'


function Footer() {
    return (
        <footer id='contato'>
            <img className={Styles.logo} src={logo} alt='logo' />
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