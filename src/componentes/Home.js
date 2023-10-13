import Styles from '../CSS/Home.module.css'
import mulher from '../img/imagem-home.png'
import linha from '../img/linha.png'


function Home() {
    return (

        <section>
            <div className={Styles.grupo}>
                <div className={Styles.texto}>
                    <h6>Seja bem-vindo(a)</h6>
                    <p>Aqui no <span>Advanced Bank</span> o avanço <br></br> da sua vida financeira é garantida</p>
                </div>

                <div className={Styles.imagem}>
                    <img src={mulher} alt='imagem de uma mulher' />
                </div>
            </div>

            <div className={Styles.linha}>
                <img src={linha} alt='linha azul' />
            </div>
        </section>

    )
}
export default Home