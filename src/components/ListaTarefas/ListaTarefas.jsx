import { useAppContext } from "../../hooks";
import { ListaTarefasItem } from "./ListaTarefasItem";

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
    const { tarefas } = useAppContext();

    return(
        <ul className={style.ListaTarefas}>
            {!tarefas.length && (
                <p> Sem tarefas cadastradas! :D </p>
            )}
            {tarefas.map(item => (
                <ListaTarefasItem 
                    key={item.nome} 
                    id={item.id}
                    nome={item.nome} 
                />
            ))}
        </ul>
    );
};

export { ListaTarefas };