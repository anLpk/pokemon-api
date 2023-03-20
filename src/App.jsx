import {useState, useEffect} from 'react'

export default function App() {
  const [pokemon, setPokemon] = useState([])
  const URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

  const fetchData = async () => {
    const res = await fetch(URL)
    const data = await res.json()

    console.log(data)

    if(data) {
      setPokemon(data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      Hey {pokemon}
    </div>
  )
}
