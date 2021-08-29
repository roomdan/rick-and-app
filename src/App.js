import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Apage } from './principal-page';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/'>
            <Apage></Apage>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
