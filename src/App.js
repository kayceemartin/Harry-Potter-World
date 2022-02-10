import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Hogwarts!</h1>
        <h4>Are you ready to be sorted into your house?</h4>
        <img src='https://www.pngmart.com/files/12/Sorting-Hat-PNG-Clipart.png'/>
        <h5>Which of these traits best describes you?</h5>
        <button path = '/Gryffindor'>Brave</button>
        <button path = '/Hufflepuff'>Loyal</button>
        <button path = '/Slytherin'>Cunning</button>
        <button path = '/Ravenclaw'>Clever</button>
      </header>
    </div>
  );
}

export default App;
