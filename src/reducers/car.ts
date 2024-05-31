import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../App'

type CarType = {
  items: Game[]
}

const initialState: CarType = {
  items: []
}

const CarSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    carAdd: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.items.find((game) => game.id === jogo.id)) {
        alert('jogo ja existe no carrinho')
      } else {
        state.items.push(jogo)
      }
    }
  }
})

export const { carAdd } = CarSlice.actions
export default CarSlice.reducer
