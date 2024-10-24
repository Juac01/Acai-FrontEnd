
import App from './pages/app';//Aqui se sobre entende que o arquivo index ela já considera 
import NaoEncontrado from './pages/naoEncontrado';
import RenderizacaoCondicional from './pages/rendoCon';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />         
                <Route path='/rendocon' element={<RenderizacaoCondicional/>} />  

                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}