import { Switch, Route } from "react-router-dom";
import NewAccount from "./components/NewAccount";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import {useStore} from "./store/store"
import Image from "./views/showImage";



function App() {
  const user = useStore(state=>state.user)
  console.log(user)
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={NewAccount} />
        <Route exact path = "/img/:username" render ={(props)=><Image
                        {...props}  key={user.username}
                        user = {user.username}/>}/> 
        
      </Switch>
    </div>
  );
}


export default App;
