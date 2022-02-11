import '../Slytherin.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Slytherin () {
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
                <div className ='characters'>
                    {sCharacters.slice(0,3).map((character => {
                        return (
                            <Link to = {`/characterdetails/${character.id}`} key = {character.id}>
                                <div className = 'card'>
                                    <div className ='card-image'>
                                        <img src = {character.image}/>
                                    </div>
                                    <div className = 'card-title'>
                                        <h3>{character.name}</h3>
                                    </div>
                                </div>
                            </Link> 
                        )
                    }))}
                </div>
                <div className = 'polyjuice'>
                    <Link to ='/'> Take the Polyjuice Potion</Link>
                </div>
        </div>
    )
}

export default Slytherin