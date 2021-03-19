import { Switch, Route } from "react-router-dom";
import NewAccount from "./components/NewAccount";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={NewAccount} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
