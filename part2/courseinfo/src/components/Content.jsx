import Part from "./Part"

export default function Content({ parts }) {
  return parts.map((x) => <Part name={x.name} key={x.id} exercises={x.exercises} />)
}
