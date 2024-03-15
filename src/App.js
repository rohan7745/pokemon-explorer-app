import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PokemonDetailsPage from './components/DetailsPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokemon/:id" component={PokemonDetailsPage} />
      </Switch>
    </div>
  );
};

export default App;
