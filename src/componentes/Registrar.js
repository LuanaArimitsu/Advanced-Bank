import Styles from '../CSS/Registrar.module.css'


function Registrar() {
    return (
        <section className={Styles.fundo}>
            <form>
                <div className={Styles.container}>
                    <h1>Registre-se</h1>
                    <hr />

                    <label for='email'><b>Email</b></label>
                    <input type='text' placeholder='Adicione o Email' name='Email' id='email' required />

                    <label for='psw'><b>Password</b></label>
                    <input type='password' placeholder='Adicione uma senha' name='psw' id='psw' required />

                    <label for='psw'><b>Repeat Password</b></label>
                    <input type='password' placeholder='Adicione uma senha' name='psw' id='psw' required />
                    <hr />

                    <p>Ao criar uma conta você concorda com nossos <a href='#'>Termos & Privacy</a>.</p>
                    <button type='submit' className={Styles.btn}>Registre-se</button>
                </div>

                <div className={Styles.containerSignin}>
                    <p>Já tem uma conta? <a href='#'>Entrar</a>.</p>
                </div>

            </form>
        </section>
    )
}
export default Registrar