import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

async function getAll() {
  return await axios.get(baseUrl)
}

async function create(newPerson) {
  return await axios.post(baseUrl, newPerson)
}

async function update(id, newPerson) {
  return await axios.put(`${baseUrl}/${id}`, newPerson)
}

async function del(id) {
  return await axios.delete(`${baseUrl}/${id}`)
}

export default {
  getAll,
  create,
  update,
  del
}

