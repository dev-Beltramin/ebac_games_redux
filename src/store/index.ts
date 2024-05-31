import { configureStore } from '@reduxjs/toolkit'

import CarReducer from '../reducers/car'

export const Store = configureStore({
  reducer: {
    carrinho: CarReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>
