import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import MessageList from "./views/MessageList.js"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/messageList" component={MessageList} />
        <Route component={NotFound} />
        
      </Switch>
    </div>
  );
}

export default App;
