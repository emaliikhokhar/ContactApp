import './App.css';
import { ToastContainer } from 'react-toastify';
import NavBar from './Components/NavBar/NavBar';
import { Route, Switch } from 'react-router';
import Home from './Components/Home/Home';
import Add from './Components/Add/Add';
import Edit from './Components/Edit/Edit';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={() => <Home/>}/>
        
        <Route path="/add" component={() => <Add/>}/>

        <Route path="/edit/:id" component={() => <Edit/>}/>
      </Switch>
    </div>
  );
}

export default App;
