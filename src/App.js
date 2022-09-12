import React from "react";

import { Route, Switch } from "react-router-dom";


import Home from  "./components/Home/Home";
import Details from "./screens/Detail"
import Favorites from "./screens/Favorites";


function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home}/> {/* exact buscar def */}
          <Route path="/detail/:id" component={Details}/>
          <Route path={"/favorites"} component={Favorites}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
