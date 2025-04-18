import style from './PaginaErro.module.css'

const PaginaErro = () =>{
    return (
        <div className={style.PaginaErro}>
            <h1>404</h1>
            <h2>Página Não Encontrada</h2>
        </div>
    );
}

export { PaginaErro };