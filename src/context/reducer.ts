import { ActionType } from './actions'
import { StateInterface, WindowSize } from './appContext'

type Action =
  | { type: ActionType.TOGGLE_DARK_MODE }
  | {
      type: ActionType.UPDATE_WINDOW_SIZE
      payload: { newSize: WindowSize }
    }

const reducer = (state: StateInterface, action: Action): StateInterface => {
  switch (action.type) {
    case ActionType.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case ActionType.UPDATE_WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.payload.newSize
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default reducer
