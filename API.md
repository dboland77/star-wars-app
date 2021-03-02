Each card should display

- Character name
- Characters birth year
- Characters home planet
- the first film the character appeared in

The people api returns name and birth year as JSON

results:

[{
"name": "Luke Skywalker",

"birth year": "19BBY",

"homeworld": "http://swapi.dev/api/planets/1/"

"films": [
"http://swapi.dev/api/films/1/"
"http://swapi.dev/api/films/2/"
"http://swapi.dev/api/films/3/"
"http://swapi.dev/api/films/4/"
]
]
}]

The planets api returns the planet name as JSON:

{"name": "Tatooine"}

The films api returns the film title as JSON:

{"title": "A New Hope"}

### Questions / thoughts

Is the film labelled as 1 in the array the first one this character appeared in?

The api provides a search facility if I choose to add this later.
https://swapi.dev/api/people/?search=r2

API returns homeworld as http but need to send the request as https

## Tests

1.  Localhost loads ok
1.  Connects to people api
1.  Fetches from people api
1.  Connects to planets api
1.  Fetches from planets api
1.  Connects to films api
1.  Fetches from films api
