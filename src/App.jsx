// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Image from '../components/Image'
import { useState } from 'react'
import axios from 'axios'
import Stats from '../components/Stats'


function App() {

  const [name, setName] = useState('')
  const [superhero, setSuperhero] = useState(null)
  const [stats, setStats] = useState(null)


  const handleSubmit = (event) => {
    event.preventDefault()
    setName(event.target.elements.nameInput.value)
  }
  const handleInputChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/858d97920157225c8ab4c66e0be46e26/search/${name}`)

      setSuperhero(response.data.results[0].image.url)
      setStats(response.data.results[0].powerstats)


    } catch (err) {
      console.log(err)

    }
  }
  const handleRandom = async () => {
    var number = Math.floor(Math.random() * 731 + 1);
    try {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/858d97920157225c8ab4c66e0be46e26/${number}`)

      setSuperhero(response.data.image.url)
      setStats(response.data.powerstats)


    } catch (err) {
      console.log(err)

    }
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input type='text' name='nameInput'
          value={name} onChange={handleInputChange}></input>
        <button className='save' type='submit' onClick={handleClick}>Save</button>
        <button className='save' type='submit' onClick={handleRandom}>Random</button>

      </form>

      {superhero ? (
        <div className="content">
          <Image url={superhero} />
          <Stats stats={stats} />
        </div>
      ) : (<p className="placeholder">Enter a superhero name</p>)}
    </div>
  )
}

export default App
