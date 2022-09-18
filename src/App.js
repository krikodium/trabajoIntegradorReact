import React from "react";

import { Route, Switch } from "react-router-dom";


import Home from  "./components/Home/Home";
import Details from "./screens/Detail"
import Favorites from "./screens/Favorites";
import AllPop from  './screens/AllPop';
import Soon from './screens/Soon'
function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home}/> {/* exact buscar def */}
          <Route path="/detail/:id" component={Details}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/allPop" component={AllPop}/>
          <Route path='/soon' component={Soon}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
