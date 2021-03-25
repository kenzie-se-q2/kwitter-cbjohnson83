import { Switch, Route } from "react-router-dom";
import NewAccount from "./components/NewAccount";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navbar from "./views/Navbar";
import Feed from "./views/Feed";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/NewAccount" component={NewAccount} />
        <Route exact path="/Feeds" component={Feed} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
