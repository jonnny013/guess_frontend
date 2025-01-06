import axios from 'axios'

const baseUrl = 'localhost:3001/api/'
const sessionsUrl = baseUrl + 'v1/sessions'

export const postTheme = theme => {
  try {
    const results = axios.post(sessionsUrl, theme)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getTheme = id => {
  try {
    const results = axios.get(`${sessionsUrl}/${id}`)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}
