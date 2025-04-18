import { FormCriarTarefa, ListaTarefas } from "../../components";

import style from './PaginaInicial.module.css'

const PaginaInicial = () => {
    return (
        <div className={style.PaginaInicial} >
            <FormCriarTarefa />
            <ListaTarefas />
        </div>
    );
};

export { PaginaInicial };