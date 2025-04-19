import style from './Rodape.module.css'

const Rodape = (props) => {
    const AnoAtual = new Date().getFullYear();

    return(
        <footer className={style.Rodape}>
            <p>React Básico - {AnoAtual} - Feito por {props.criador}</p>
        </footer>
    )
}

export { Rodape };