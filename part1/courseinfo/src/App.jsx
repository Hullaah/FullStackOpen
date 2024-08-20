function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const contents = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 }
  ]

  return (
    <>
      <Header course={course} />
      <Content contents={contents} />
      <Total total={contents.reduce((x, y) => x + y.exercises, 0)} />
    </>
  )

}

function Header({ course }) {
  return (
    <h1> {course} </h1>
  )
}

function Content({ contents: [part1, part2, part3] }) {
  return (
    <>
      <Part {...part1} />
      <Part {...part2} />
      <Part {...part3} />
    </>
  )
}

function Total({ total }) {
  return (
    <p> Number of exercises {total} </p>
  )
}

function Part({ part, exercises }) {
  return (
    <p>{part} {exercises}</p>
  )
}

export default App
