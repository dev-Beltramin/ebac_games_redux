import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { Store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => res.json())
      .then((res) => setGames(res))
  }, [])

  return (
    <Provider store={Store}>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} />
        <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    <Provider/>
  )
}

export default App
