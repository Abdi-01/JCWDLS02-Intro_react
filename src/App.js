import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';

// functional component
function App() {
  return (
    <div className="App">
      <HomePage/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React Environtment
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
