import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  function addPerson(e) {
    e.preventDefault()

    let i = persons.findIndex(person => person.name === newName)
    if (i != -1) {
      const confirmUpdate = confirm(
        `${persons[i].name} is already added to phonebook, replace the old number with a new one?`
      )
      if (confirmUpdate)
        personService
          .update(persons[i].id, { name: newName, number })
          .then(response => setPersons(persons.filter(person => person.id != persons[i].id).concat(response.data)))
      return
    }

    (async () => {
      const response = await personService.create({ name: newName, number })
      setPersons([...persons, response.data])
    })()
  }

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onChange={e => setFilterText(e.target.value)} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={addPerson}
        onNameChange={e => setNewName(e.target.value)}
        onNumberChange={e => setNumber(e.target.value)}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons} filterText={filterText} />
    </div >
  )
}

export default App
