import { ListaTarefasItem } from "./ListaTarefasItem";

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
    const tarefas = [
        { id: 1, nome: 'Tarefa 1' },
        { id: 2, nome: 'Tarefa 2' },
        { id: 3, nome: 'Tarefa 3' },
    ];

    return(
        <ul className={style.ListaTarefas}>
            {tarefas.map(item => <ListaTarefasItem key={item.nome} nome={item.nome} />)}
        </ul>
    );
};

export { ListaTarefas };