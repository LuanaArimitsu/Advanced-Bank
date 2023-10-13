import Styles from '../CSS/Cartao.module.css'


function Cartao(){
    return(
        <section className={Styles.fundo}>
            <div className={Styles.estilo}>
                <h5>Escolha o cartão ideal para você</h5>
                <button className={Styles.botao}>Saiba mais</button>
            </div>
        </section>
    )
}

export default Cartao