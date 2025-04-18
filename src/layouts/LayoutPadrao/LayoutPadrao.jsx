import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape } from "../../components";


const LayoutPadrao = () => {
    return(
        <>
            <Cabecalho/>
            <Conteudo> 
                <Outlet />
            </Conteudo>
            <Rodape nomeCriador="Kiras"/>
        </>
    )
};

export { LayoutPadrao };