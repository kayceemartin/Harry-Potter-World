import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Navigation() {
    const [results, setResults] = useState()
    const [searchInput, setSearchInput] = useState(' ')
    const handleFetch = () => {
        const URL = 'https://hp-api.herokuapp.com/api/characters'

        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const queryResults = data.data
                setResults(queryResults)
            })
    }

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleFetch(searchInput)
    }


    useEffect(() => {
        handleFetch(searchInput)
    }, [])


    return (
        <div className='character-search'>
            <form onSubmit={handleSubmit}>
                <input className="search"
                    type='search'
                    placeholder="search for the magic here"
                    onChange={handleChange}
                    value={searchInput}
                />
                <Link to={`/characterdetails/${searchInput}`}>
                    <button className="search">Search</button>
                </Link>
            </form>
        </div>
    )
}

export default Navigation