import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DuyOL : <code>  https://github.com/DuyOL</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/DuyOL"
          target="_blank"
          rel="noopener noreferrer"
        >
          Đây là GitHub của tôi
        </a>
      </header>
    </div>
  );
}

export default App;
