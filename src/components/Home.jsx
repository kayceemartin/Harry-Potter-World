import {Link} from 'react-router-dom'

function Hogwarts () {
    return (
        <div className='Hogwarts'>
            <h1>Welcome to Hogwarts!</h1>
            <h4>Are you ready to be sorted into your house?</h4>
            <img src='https://www.pngmart.com/files/12/Sorting-Hat-PNG-Clipart.png'/>
            <h5>Which of these traits best describes you?</h5>
            <Link to ='/Gryffindor'>Brave</Link>
            <Link to ='/Hufflepuff'>Loyal</Link>
            <Link to ='/Slytherin'>Cunning</Link>
            <Link to ='/Ravenclaw'>Clever</Link>
        </div>
    )
}

export default Hogwarts;