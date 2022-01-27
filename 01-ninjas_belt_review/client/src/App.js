import logo from './logo.svg';
import './App.css';
import {
        BrowserRouter,
        Switch,
        Route,
        Link
        } from 'react-router-dom';

import NinjaForm from './components/NinjaForm'
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import EditNinja from './components/EditNinja';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App container">    
        <h1>Ninja Belt review</h1>
        <Switch>
          
            <Route  exact path='/'>
              <NinjaForm></NinjaForm>
              <hr />
              <AllNinjas></AllNinjas>
            </Route>
            <Route exact path = "/ninjas/:id">
            <OneNinja></OneNinja>
          </Route>
          <Route exact path = "/ninjas/edit/:id">
            <EditNinja/>
          </Route>

        </Switch> 

    </div>
    </BrowserRouter> 
  );
 
}

export default App;
