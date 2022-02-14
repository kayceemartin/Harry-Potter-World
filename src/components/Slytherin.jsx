import '../Slytherin.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Slytherin() {
    const [sCharacters, setSCharacters] = useState([])
    const URL = 'https://hp-api.herokuapp.com/api/characters/house/slytherin'
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then((json) => {
                setSCharacters(json)
                console.log('success!')
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='Slytherin'>
            <h1>Welcome to the Slytherin Common Room!</h1>
            <div className='characters-s'>
                {sCharacters.slice(0, 3).map((character => {
                    return (
                        <Link to={`/characterdetails/${character.name}`} key={character.name}>
                            <div className='card-s'>
                                <div className='card-image-s'>
                                    <img src={character.image} />
                                </div>
                                <div className='card-title-s'>
                                    <h3>{character.name}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                }))}
            </div>
            <div className='polyjuice'>
                <Link to='/Hufflepuff'> Take the Polyjuice Potion</Link>
            </div>
            <div className='go-home'>
                <Link to='/'>Speak to the Sorting Hat</Link>
            </div>
        </div>
    )
}

export default Slytherin