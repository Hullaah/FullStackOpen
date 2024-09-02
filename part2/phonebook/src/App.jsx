import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  function addPerson(e) {
    e.preventDefault()
    console.log(persons)
    if (persons.findIndex(person => person.name === newName) != -1) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    setPersons(
      [
        ...persons,
        { name: newName, number }
      ]
    )
  }

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

      <Persons persons={persons} filterText={filterText} />
    </div >
  )
}

export default App
