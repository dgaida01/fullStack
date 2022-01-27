import NewProductForm from './components/NewProductForm';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {useState} from 'react';

//sup

function App() {
  let [refresh,setRefresh] = useState(false);
  return (
    <BrowserRouter>
    <div className="App ">
      
        <Switch>
          <Route exact path='/'>
            <NewProductForm refresh={refresh} setRefresh={setRefresh}/>          
            <AllProducts refresh={refresh}/>
          </Route>
          <Route exact path='/Product/Detail/:id'>
            <ProductDetails/>
          </Route>
          <Route exact path='/Product/Edit/:id'>
            <NewProductForm/> 
          </Route>
        </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
