import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import NewAuthor from './components/NewAuthor';
import Author from './components/Author';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact  path={'/'}>
            <Author />
          </Route>
          <Route exact path={'/new'}>
            <NewAuthor />
          </Route>
          <Route exact path={'/edit/:id'}>
          <EditAuthor></EditAuthor>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
