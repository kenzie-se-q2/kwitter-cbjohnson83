import { Switch, Route } from "react-router-dom";

import NewAccount from "./components/NewAccount";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import UserList from "./views/UserList";
import User from "./views/User";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={NewAccount} />
        <Route exact path="/userlist" component={UserList} />
        <Route component={NotFound} />
        <Route
          path="/userlist/:username"
          render={(props) => <User {...props} />}
        />
      </Switch>
      <div className="container">Display Users</div>
      <UserList />
    </div>
  );
}

export default App;
