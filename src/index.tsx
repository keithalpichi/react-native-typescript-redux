import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import RootNavigator from "./navigators"
import rootReducer from "./reducers"

const store = createStore(rootReducer)

export default () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
