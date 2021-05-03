import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../screens/Home';
import PublicEntity from '../../screens/PublicEntity';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:public_entity" component={PublicEntity} />
    </Switch>
  );
}

export default Main;
