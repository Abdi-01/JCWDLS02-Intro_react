import './App.css';
import FunctionalComponent from './Pages/FunctionalPage';
import HomePage from './Pages/HomePage';

// functional component
function App() {
  return (
    <div className="App container">
      <FunctionalComponent/>
      <HomePage/>
    </div>
  );
}

export default App;
