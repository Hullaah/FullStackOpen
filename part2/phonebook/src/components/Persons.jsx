export default function Persons({ persons, filterText }) {
  return (
    <>
      {persons.filter(
        person => person.name.toLowerCase().includes(filterText)
      ).map(
        person => <p key={person.name}> {person.name} {person.number} </p>
      )}
    </>
  )
}
