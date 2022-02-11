import {Link} from 'react-router-dom'

function Hogwarts () {
    return (
        <div className='Hogwarts'>
            <h1>Welcome to Hogwarts!</h1>
            <h4>Are you ready to be sorted into your house?</h4>
            <img src='https://www.pngmart.com/files/12/Sorting-Hat-PNG-Clipart.png'/>
            <h5>Which of these traits best describes you?</h5>
            <div className ="Links">
                <Link to ='/Gryffindor' id = 'Brave'>Brave</Link> 
                <Link to ='/Hufflepuff'id = 'Loyal'>Loyal</Link>
                <Link to ='/Slytherin'id = 'Cunning'>Cunning</Link>
                <Link to ='/Ravenclaw'id = 'Clever'>Clever</Link>
            </div>
        </div>
    )
}

export default Hogwarts;