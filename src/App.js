import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Pages from './components/Pages'

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  )
}

export default App
