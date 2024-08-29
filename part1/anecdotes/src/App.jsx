import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  })
  const [selected, setSelected] = useState(0)
  const [oneWithMaxVotes, _] = Object.entries(votes).reduce((x, y) => x[1] > y[1] ? x : y)

  function handleVote() {
    setVotes({ ...votes, [selected]: votes[selected] + 1 })
  }

  function handleSelect() {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <>
      <div>
        <h1> Anecdote of the day </h1>
        <div>
          {anecdotes[selected]}
          <p>has {votes[selected]} votes</p>
        </div>
        <button onClick={handleVote}>
          vote
        </button>
        <button onClick={handleSelect}>
          next anecdotes
        </button>
      </div>
      <div>
        <h1> Anecdote with most votes </h1>
        <div>
          {anecdotes[oneWithMaxVotes]}
          <p>has {votes[oneWithMaxVotes]} votes</p>
        </div>
      </div>
    </>
  )
}

export default App
