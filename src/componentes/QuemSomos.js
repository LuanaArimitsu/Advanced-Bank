import Styles from '../CSS/QuemSomos.module.css'
import invest from '../img/linhas-invest.png'
import linha from '../img/linha.png'


function QuemSomos() {
    return (
        <section className='quemsomos'>

            <div className={Styles.caixa2}>
                <img src={invest} alt='linhas de investimento' />
            </div>

            <div id='sobre' className={Styles.caixa}>

                <h3>Sobre o AD Bank</h3>
                <p>O Advanced Bank nasceu com o intuito de mudar o mundo dos bancos, trazendo a tecnologia de forma simples e práticas inovadoras. É um banco que valoriza os clientes trazendo uma experiência humana e personalizada, priorizamos a seguranças de nossos AD Bankers com transparência nas relações e transações. Aqui no AD Bank o seu dinheiro estará seguro e avançando.</p>
            </div>

            <div className={Styles.linha}>
                <img src={linha} alt='linha azul' />
            </div>

       

        </section>
    )
}

export default QuemSomos