import fetch from 'node-fetch'
import axios from 'axios'

//URLs
//Frases: http://api.adviceslip.com/advice
//Rick and Morty: http://rickandmortyapi.com/api/character/73
//Traduçoes: https://api.funtranslations.com/translate


//fetch(Frases)
 const buscarFrasesComFetch = async() => {
  const response = await fetch('http://api.adviceslip.com/advice')
   const data = await response.json()
   console.log(`Com o fetch -> ${data.slip.advice}`)
} 

//buscarFrasesComFetch()

//axios(Frases)
const buscarFrasesComAxios = async () => {
  const response = await axios.get('http://api.adviceslip.com/advice')
  console.log(`Com o Axios -> ${response.data.slip.advice}`)
}
//buscarFrasesComAxios()

//---------------------------------------

//fetch(Traduçoes)
const buscatTraducoesComFetch = async () => {
  const body = { text: 'Hello my friend' }
  const response = await fetch('https://api.funtranslations.com/translate/pirate', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'content-type': 'application/json'}
  })
  const data = await response.json()
  console.log(data)
}
buscatTraducoesComFetch()

//axios(Traduçoes)
const buscatTraducoesComAxios = async () => {
  const body = { text: 'Hello my friend' }
  const response = await axios.post('https://api.funtranslations.com/translate/pirate')
  console.log(response.data)
 
}
buscatTraducoesComAxios()