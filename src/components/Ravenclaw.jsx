import '../Ravenclaw.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Ravenclaw() {
    const [rCharacters, setRCharacters] = useState([])
    const URL = 'https://hp-api.herokuapp.com/api/characters/house/ravenclaw'
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then((json) => {
                setRCharacters(json)
                console.log('success!')
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='Ravenclaw'>
            <h1>Welcome to the Ravenclaw Common Room!</h1>
            <div className='characters-r'>
                {rCharacters.slice(0, 3).map((character => {
                    return (
                        <Link to={`/characterdetails/${character.name}`} key={character.name}>
                            <div className='card-r'>
                                <div className='card-image-r'>
                                    <img src={character.image} />
                                </div>
                                <div className='card-title-r'>
                                    <h3>{character.name}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                }))}
            </div>
            <div className='polyjuice'>
                <Link to='/Gryffindor'> Take the Polyjuice Potion</Link>
            </div>
            <div className='go-home'>
                <Link to='/'>Speak to the Sorting Hat</Link>
            </div>
        </div>
    )
}

export default Ravenclaw