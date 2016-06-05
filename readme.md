# star wars connections -- react & SWAPI
---

This Star Wars App is a website where users can explore different people, places, species, planets and more from the Star Wars universe. Initially the information is displayed as a title or name and when the 'Show Details' link is clicked, additional information is displayed.

The project currently gets the information as a JSON object from the <a href="swapi.co">Star Wars API (SWAPI)</a>

####To view SWAPI documentation

Go to <a href="http://swapi.co/documentation">swapi.co/documentation</a>

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
- Add a "Wookiee" version of the site as detailed <a href="http://swapi.co/documentation#wookiee">here</a> on the SWAPI website
- Several resources have connections, for example the Starships has an array of request URL's for its pilots information. Displaying those connections and potentially linking them are also planned next steps