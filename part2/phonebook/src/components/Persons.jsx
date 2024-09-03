import personService from "../services/persons"

export default function Persons({ persons, setPersons, filterText }) {
  return (
    <>
      {persons.filter(
        person => person.name.toLowerCase().includes(filterText)
      ).map(
        person =>
          <p key={person.id}>
            <span>{person.name} </span>
            <span>{person.number} </span>
            <button onClick={async () => {
              let confirmDelete = confirm(`Delete ${person.name}?`)
              if (!confirmDelete)
                return
              await personService.del(person.id)
              setPersons(persons.filter(x => x.id != person.id))
            }}>
              delete
            </button>
          </p>
      )}
    </>
  )
}
