import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/'
const sessionsUrl = baseUrl + 'v1/sessions'
const answersUrl = baseUrl + 'v1/answers'

export const postTheme = async theme => {
  try {
    const results = await axios.post(sessionsUrl, theme)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getTheme = async id => {
  try {
    const results = await axios.get(`${sessionsUrl}/${id}`)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const postAnswer = async answer => {
  try {
    const results = await axios.get(`${answersUrl}`, answer)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}
