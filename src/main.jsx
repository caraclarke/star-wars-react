var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var HomePageItem = require('./components/Nav/HomePageItem.jsx');
var FilmBase = require('./components/Films/FilmBase.jsx')
var PeopleBase = require('./components/People/PeopleBase.jsx')
var PlanetBase = require('./components/Planets/PlanetBase.jsx');
var SpeciesBase = require('./components/Species/SpeciesBase.jsx')
var StarshipBase = require('./components/Starships/StarshipBase.jsx')
var VehicleBase = require('./components/Vehicles/VehicleBase.jsx')
var Vehicle = require('./components/Vehicles/Vehicle.jsx');
var Film = require('./components/Films/Film.jsx');

// <App bgColor="#263248" titleColor="#7E8AA2" linkColor="" />

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePageItem}></IndexRoute>
      <Route path="/films" component={FilmBase}>
        <Route path="/films/:id" component={Film}></Route>
      </Route>
      <Route path="/people" component={PeopleBase}></Route>
      <Route path="/planets" component={PlanetBase}></Route>
      <Route path="/species" component={SpeciesBase}></Route>
      <Route path="/starships" component={StarshipBase}></Route>
      <Route path="/vehicles" component={VehicleBase}>
        <Route path="/vehicles/:id" component={Vehicle}></Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
);