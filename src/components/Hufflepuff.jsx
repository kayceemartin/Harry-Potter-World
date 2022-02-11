import '../Hufflepuff.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Hufflepuff () {
    const [hCharacters, setHCharacters] = useState([])
    const URL = 'https://hp-api.herokuapp.com/api/characters/house/hufflepuff'
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then((json) => {
            setHCharacters(json)
            console.log('success!')
        }).catch(err => {
            console.log(err)
        })
    }, [])
   
    return ( 
        <div className='Hufflepuff'>
            <h1>Welcome to the Hufflepuff Common Room!</h1>
                <div className ='characters'>
                    {hCharacters.slice(0,3).map((character => {
                        return (
                            <Link to = {`/characterdetails/${character.name}`} key = {character.name}>
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

export default Hufflepuff