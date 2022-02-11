import '../CharacterDetails.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CharacterDetails (props) {
    const id = useParams()
    // const name = id.split('%20').join(' ')

    console.log(id)
    const [characters, setCharacters] = useState(null)
    const URL = "http://hp-api.herokuapp.com/api/characters"

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((json)=> {
            setCharacters(json)
            console.log('success!')
        }) .catch(err => {
            console.log(err)
        })
    }, [])

    function getCharacter (array, name) {
      return array.find(el => {
        return el.name === name
      })
    }
    
   

    if (!characters) {
        return <p>Loading magic ...</p>
      }
    
    console.log(getCharacter(characters, id.id))
    const character = getCharacter(characters, id.id)

    return (
        <div className="details-container">
          <img
            src={character.image}
            alt={character.name}
          />
          <div className="details">
            <h2>Name: {character.name}</h2>
            <h3>House: {character.house}</h3>
            <h3>Wand Core: {character.wand.core}</h3>
            <h3>Patronus: {character.patronus}</h3>
          </div>
        </div>
      );
}

export default CharacterDetails