import Body from './Body';
import Contact from './Contact';
import Projects from './Projects';
import { Routes, Route } from 'react-router';

function RoutesContainer() {
  return (
    <div>
    <Routes>
      <Route exact path='/' element={<Body />} />
      <Route path='/projects-list' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  )
};

export default RoutesContainer;