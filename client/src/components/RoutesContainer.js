import Body from './Body';
import Contact from './Contact';
import Projects from './Projects';
import { Switch, Route } from 'react-router';

function RoutesContainer() {
  return (
    <div>
    <Switch>
      <Route exact path='/'><Body /></Route>
      <Route path='/projects'><Projects /></Route>
      <Route path='/contact'><Contact /></Route>
      </Switch>
    </div>
  )
};

export default RoutesContainer;