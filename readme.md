# Star Wars Connections - React.js & SWAPI
---

This Star Wars App is a website where visitors can explore different people, places, species, planets and more from the Star Wars universe. Initially the information is displayed as a title or name and when the 'Show Details' link is clicked, additional information is displayed.

The project currently gets the information as a JSON object from the <a href="swapi.co">Star Wars API (SWAPI)</a>

####To view SWAPI documentation

Go to [swapi.co/documentation](http://swapi.co/documentation).

SWAPI's documentation explains what attributes are available for each resources like people or films. By reading through this documentation I was able to plan how I wanted to design the site to display the information in an engaging way.

####Features

- Explore different resources from the Star Wars universe
- Filter by resource
- Hide and show more information about a specific resource
- Expand multiple resources in the same resource section and compare them

####Installation

Install the project by:

```
$ git clone git@github.com:caraclarke/star-wars-react.git
$ cd star-wars-react/
$ npm install

```

####To view page locally

```
$ ruby -run -e httpd . -p5000

```

####Planned updates

This project is ongoing, I have several next steps planned
- Integrate [Redux](http://redux.js.org/index.html)
- Add a "Wookiee" version of the site as detailed [here](http://swapi.co/documentation#wookiee) on the SWAPI website
- Linking between different components such as linking from a pilots name on the vehicle component to their character page
