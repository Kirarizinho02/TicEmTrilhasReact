import { useState } from 'react';

import { useAppContext } from '../../../hooks';

import { Botao, TIPO_BOTAO } from '../../Botao';
import { CampoTexto } from '../../CampoTexto';

import style from './ListaTarefasItem.module.css'
import { Loading } from '../../Loading';

const ListaTarefasItem = (props) => {    
    const { id, nome } = props;

    const [ estaEditando, setEstaEditando ] = useState(false);

    const { removerTarefa, editarTarefa, loadingEditar, loadingDeletar } = useAppContext();

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return(
        <li className={style.ListaTarefasItem}> 
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto 
                    defaultValue={nome} 
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            setEstaEditando(false); 
                            editarTarefa(id, event.currentTarget.value);
                        }
                    }}
                    onBlur={event => {
                        setEstaEditando(false); 
                        editarTarefa(id, event.currentTarget.value);
                    }}
                    autoFocus
                />
            )}

            
            {loadingEstaEditando && (
                <Loading />
            )}
            
            {!estaEditando && !loadingEstaEditando && (
                <p onDoubleClick={() => setEstaEditando(true)}>{nome}</p>
            )}
            
            <Botao 
                texto={loadingEstaDeletando ? <Loading /> : '-'}
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />
        </li>
    );
};

export { ListaTarefasItem };