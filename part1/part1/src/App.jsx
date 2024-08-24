import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  function increaseByOne() {
    setCounter(counter + 1)
  }

  function setToZero() {
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={setToZero} text='zero' />
    </>
  )
}

function Display({counter}) {
  return (
    <div>{counter}</div>
  )
}

function Button({onClick, text}) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App
