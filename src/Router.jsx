import { Route, Routes } from 'react-router-dom';

import { SobreNos, PaginaInicial, PaginaErro } from './pages';
import { LayoutPadrao } from './layouts';

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/sobre-nos" element={<SobreNos />} />
                <Route path="*" element={<PaginaErro />} />
            </Route>
        </Routes>
    );
};

export { Router };