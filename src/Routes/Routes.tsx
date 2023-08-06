import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

const Rotas = () => (
    <Routes>
        <Route path='/' element={ <Home /> } />
    </Routes>
)

export default Rotas;