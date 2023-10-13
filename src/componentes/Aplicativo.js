import Styles from '../CSS/Aplicativo.module.css'
import app from '../img/celular-app.png'


function Aplicativo() {
    return (
        <section className={Styles.fundo}>
            <div className={Styles.imagem}>
                <img src={app} alt='imagem mostruario app' />
                <p>Conte com o nosso aplicativo simples e objetivo</p>
            </div>
        </section>
    )
}
export default Aplicativo;