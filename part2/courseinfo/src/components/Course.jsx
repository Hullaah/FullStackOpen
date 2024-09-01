import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

export default function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((x, y) => x + y.exercises, 0)} />
    </>
  )
}
