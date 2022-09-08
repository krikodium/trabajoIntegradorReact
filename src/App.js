import React from "react";

import { Route, Switch } from "react-router-dom";


import Home from  "./components/Home/Home";
import Details from "./screens/Detail/Detail"


function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home}/> {/* exact buscar def */}
          <Route path="/detail/:id" component={Details}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
