import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Traslator from './Translator';
import NumberTraslator from './NumberTraslator'
const Home = () => (
  <div>
      <h1 className='title'>Home</h1>
      <nav className='navBar'>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trivia/:number">Trivia</Link>|{" "}
          <Link to="/math/:number">Math</Link>
      </nav>
  </div>
);
const Trivia = () => (
  <div>
      <h1>Trivia</h1>
      <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trivia/:number">Trivia</Link>|{" "}
          <Link to="/math/:number">Math</Link>
      </nav>
      <Traslator />
  </div>
);



const Math = () => (
  <div>
      <h1 className='math-page'>Math</h1>
      <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trivia/:number">Trivia</Link>|{" "}
          <Link to="/math/:number">Math</Link>
      </nav>  
      <NumberTraslator />
  </div>
);


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Trivia path="/trivia/:number" />
        <Math path="/math/:number" />
      </Router>
    </div>
  );
}

export default App;   
