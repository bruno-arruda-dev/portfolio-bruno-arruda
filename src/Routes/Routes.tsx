import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects';

const Rotas = () => (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> } />
    </Routes>
)

export default Rotas;