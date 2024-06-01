import { configureStore } from '@reduxjs/toolkit'

import CarReducer from '../reducers/car'
import api from '../services/api'

export const Store = configureStore({
  reducer: {
    carrinho: CarReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof Store.getState>
