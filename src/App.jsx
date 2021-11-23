import {Switch, Route} from "react-router";
import './App.scss';

//Pages

import Home from "./pages/Home/Home";

function App() { 
  return (
    <div className="app">
     <Switch>
       <Route path="/" component={Home}></Route>
     </Switch>
    </div>
  );
}

export default App;
