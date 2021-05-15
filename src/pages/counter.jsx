import { useReducer } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

const initialState = 0

// 第一引数にstate, 第ニ引数にaction（文字列）
const reducerFunc = (countState, action) => {
  switch (action) {
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState)

  return (
    <>
      <h2>カウント:{count}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
            dispatch('increment')
          }}
        >
          increment
        </Button>
        <Button
          onClick={() => {
            dispatch('decrement')
          }}
        >
          decrement
        </Button>
        <Button
          onClick={() => {
            dispatch('reset')
          }}
        >
          reset
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Counter
