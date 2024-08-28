import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback </h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}


function Button({ text, onClick }) {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

function Statistics(props) {
  const feedbackGiven = Boolean(props.good && props.neutral && props.bad)

  return (
    <>
      <h1> statistics </h1>
      {feedbackGiven ? <table><StatisticsFeedBack {...props} /></table> : <NoFeedBack />}
    </>
  )
}

function StatisticsFeedBack({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  return (
    <tbody>
      <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={total} />
      <StatisticsLine text='average' value={average} />
      <StatisticsLine text='positive' value={positivePercentage} />
    </tbody>
  )
}

function NoFeedBack() {
  return <p>No feedback given</p>
}

function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

export default App
