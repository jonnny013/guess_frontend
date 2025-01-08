/* eslint-disable no-undef */
import axios from 'axios'

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://guessing-game.fly.dev/api/'
    : 'http://localhost:3001/api/'
const sessionsUrl = baseUrl + 'v1/sessions'
const answersUrl = baseUrl + 'v1/answers'
const gamesUrl = baseUrl + 'v1/games'

export const postTheme = async theme => {
  try {
    console.log(theme)
    const results = await axios.post(sessionsUrl, { theme })
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
    const results = await axios.post(`${answersUrl}`, answer)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getNumberOfAnswers = async id => {
  try {
    const results = await axios.get(`${answersUrl}/count/${id}`)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getARandomAnswerWithNames = async id => {
  try {
    const results = await axios.get(`${answersUrl}/random/${id}`)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getPreviouslyFoundAnswer = async id => {
  try {
    const results = await axios.get(`${answersUrl}/${id}`)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const sendMyGuess = async data => {
  try {
    const results = await axios.post(`${gamesUrl}`, data)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getAllGuesses = async id => {
  try {
    const results = await axios.get(`${gamesUrl}/${id}`)
    return results.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}
