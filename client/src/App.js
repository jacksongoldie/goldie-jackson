import { useState, useEffect } from 'react';
import './App.css';
import RoutesContainer from './components/RoutesContainer';
import NavBar from './components/NavBar';



function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <RoutesContainer />
    </div>
  );
}

export default App;
