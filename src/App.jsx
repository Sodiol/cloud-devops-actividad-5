import './App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - CHANGE THE NAME VARIABLE TO YOUR NAME - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const name = 'Joel';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - CHANGE THE NAME VARIABLE TO YOUR NAME - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Hola, mi nombre es {name} <span className="heart">♥️</span> DevOps and React
        </p>
       <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p className="small">
          Hola soy Joel Ladino
        </p>
      </header>
    </div>
  );
}

export default App;
