import { ActionType } from './actions'
import { createContext, useReducer, useContext } from 'react'
import reducer from './reducer'

export type WindowSize = { width: number; height: number }

export interface StateInterface {
  darkMode: boolean
  windowSize: WindowSize
}

export const initialState: StateInterface = {
  darkMode: true,
  windowSize: { width: window.innerWidth, height: window.innerHeight }
}

interface AppContextInterface extends StateInterface {
  toggleDarkMode: () => void
  changeWindowSize: (newSize: WindowSize) => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  toggleDarkMode: () => null,
  changeWindowSize: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.TOGGLE_DARK_MODE })
  }

  const changeWindowSize = (newSize: WindowSize) => {
    dispatch({ type: ActionType.UPDATE_WINDOW_SIZE, payload: { newSize } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleDarkMode,
        changeWindowSize
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextInterface
}

export { AppContextProvider, useAppContext }
