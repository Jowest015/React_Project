# React-Project (Weather App)

## Set-up

Weather app will display city name, current weather(Icons?), temperature, humidity and wind speed...for the kite flyers.

*pivot*

Going to use openweather api which allows location searching instead of hardcode...it will be easier, funny enough

- [x] Get react app up
- [x] Set-up react router
- [ ] Set-up react redux
- [x] Set-up searchbar
- [ ] Set-up api (https://openweathermap.org/)
- [ ] Set-up forecast component
- [ ] Set-up current weather component
- [ ] Set-up hourly forecast component
- [ ] Add some styling (material-ui)

### Get React setup
- [x] done

### Setup react router
- [x] setup (npm i react-router-dom)
- [x] import browserouter, switch, link, and route in app.jsx
- [x] wrap app in router component
- [x] add 404 in switch

### Setup react redux
- [x] Create a data store (`store.js`)
- [x] Create a reducer with an initial state (`reducer.js`)
- [x] Wrap app in `Provider` component
- [ ] connect component to store with `connect()`, `MapStatetoProps`, `MapDispatchtoProps`

### Setup searchbar.js
- [x]  create function `OnSubmit` pass in event
- [x]  create function `OnChange` pass in event, setState
- [x] make search form onSubmit, submit button, search input pass in OnChange function
- [x] export component

### Setup API
- [x] make free account
- [x] generate api key
- [x] verify your getting information
- [x] install axios
- [x] make api folder, make method file
- [x] store api key as .env variable or variable in GET file
- [x] make GET function , pass in api key
- [x] pass in location from searchbar form
- [x] export to searchbar

### Setup forecast component

### Setup current component

### Setup hourly component

