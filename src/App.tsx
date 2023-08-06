import { useContext } from 'react'
import NavBar from './components/NavBar/NavBar'
import classes from './App.module.scss'
import { ConfigContext } from './context/ConfigContext'
import Rotas from './Routes/Routes'

function App() {
  const {theme} = useContext(ConfigContext)

  return (
    <div className={`${classes['App_' + theme]}`}>
      <NavBar />
      <Rotas />
    </div>
  )
}

export default App