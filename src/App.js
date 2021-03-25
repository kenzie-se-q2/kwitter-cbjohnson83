import { Switch, Route } from "react-router-dom";
import NewAccount from "./components/NewAccount";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

import Navbar from "./views/Navbar";
import Feed from "./views/Feed";
import { useStore } from "./store/store";
import Profile from "./views/Profile";
import UserUpdate from "./views/UserUpdate";


function App() {
  const user = useStore((state) => state.user);
  console.log(user);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/NewAccount" component={NewAccount} />
        <Route exact path="/Feeds" component={Feed} />
        <Route component={NotFound} />

        <Route exact path="/users" component={NewAccount} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/userupdate" component={UserUpdate} />

      </Switch>
      <Profile />
    </div>
  );
}

export default App;
