import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="./Store.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Store
        </a>
      </header>
    </div>
  );
}

export default App;
