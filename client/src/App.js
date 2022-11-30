import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
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
      <Body />
      <Footer />
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
