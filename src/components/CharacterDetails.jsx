import '../CharacterDetails.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function CharacterDetails(props) {
  const id = useParams()
  console.log(id)
  const [characters, setCharacters] = useState(null)
  const URL = "http://hp-api.herokuapp.com/api/characters"

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(setDefaultValues(json))
        console.log('success!')
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function setDefaultValues(json) {
    let characterCopy = { ...json }
    const patronus = characters.name
    switch (patronus) {
      case "Draco Malfoy":
        characterCopy.patronus = "dragon"
        break;
      case "Fat Friar":
        characterCopy.patronus = "unknown"
        break;
      case "Hannah Abbott":
        characterCopy.patronus = "ocelot"
        break;
      default: characterCopy.patronus = 'unknown'
        break;
    }

    const core = characters.name
    switch (core) {
      case "Severus Snape":
        characterCopy.wand.core = "unicorn hair"
        break;
      case "Bellatrix LaStrange":
        characterCopy.wand.core = "dragon heartstring"
        break;
      case "Fat Friar":
        characterCopy.wand.core = "unicorn hair"
        break;
      case "Hannah Abbott":
        characterCopy.wand.core = "unicorn tail hair"
        break;
      case "Cho Chang":
        characterCopy.wand.core = "unknown"
        break;
      case "Luna Lovegood":
        characterCopy.wand.core = "unicorn hair"
        break;
      default: characterCopy.wand.core = "unknown"
        break;
    }
    return characterCopy
    //copy the object-done
    //update the object with the new wand and patronus
    //return the copy- done
  }



  function getCharacter(array, name) {
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
      <div className='back'>
        <Link to={`/${character.house}`}>Mischief Managed</Link>
      </div>
    </div>
  );
}

export default CharacterDetails