import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hola Dojo!</h1> 
      </header>
      <main>
        <Tasklist/>
      </main>
    </div>
  );
}
function Tasklist(){
  return (
    <div className='TaskList'>
      <h2>Cosas que necesito hacer:</h2>
      <ul>
        <li>Hacer la tareas Core</li>
        <li>Pasear al perro</li>
        <li>Cocinar</li>
      </ul>
    </div>
  )
}

export default App;

