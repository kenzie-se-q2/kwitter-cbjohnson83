import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Profile from "./views/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <div className="container">Display Profile Information</div>
      <Profile />
    </div>
  );
}

export default App;
