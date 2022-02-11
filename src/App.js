import './Hogwarts.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hogwarts from './components/Home';
import Slytherin from './components/Slytherin';
import Hufflepuff from './components/Hufflepuff';
import Gryffindor from './components/Gryffindor';
import Ravenclaw from './components/Ravenclaw';
import CharacterDetails from './components/CharacterDetails'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path ='/' element={<Hogwarts/>} />
          <Route path='/Gryffindor' element={<Gryffindor/>} />
          <Route path='/Slytherin' element={<Slytherin/>}/>
          <Route path='/Hufflepuff' element={<Hufflepuff/>}/>
          <Route path='/Ravenclaw' element={<Ravenclaw/>} />
          <Route path='/characterdetails/:id' element= {<CharacterDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
