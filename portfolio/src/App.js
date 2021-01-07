import './App.css';
import './components/cssreset/cssreset.css';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
