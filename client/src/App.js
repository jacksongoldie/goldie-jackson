import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/'><Body /></Route>
      <Route path='/projects'><Projects /></Route>
      <Route path='/contact'><Contact /></Route>
      </Switch>
      <Footer />
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
