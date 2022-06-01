# food-on-hand-app
Restaurants search by location app developed with React.js, Typescript and Sass

## Technical Considerations
This project consumes <a href="https://www.yelp.com/developers/documentation/v3/get_started" target="_blank">Yelp Fusion API</a> for all restaurant information.
For development purposes and to solve a general problem of accessibility to the api, use an online helper 
<a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">Cors Anywhere</a>, if when consulting the restaurants the call returns a 403 error, you must 
access again to the helper link and click on "Request temporary access to the demo server". 
I took this decision on the use of this helper only for reasons of developing the structure of 
the project with Redux and using a Fetch Data custom hook with Axios and Typescript, but it is not the best 
option for a project that is going to real formal production.

The address coordinates are consumed from Google Places Api & <a href="https://github.com/ErrorPro/react-google-autocomplete#readme" target="_blank">React Google Autocomplete</a>

### Future improvements

- Add a filter not only to view restaurants, the api also gives the option to query different types of businesses, food types, delivery option, etc.
- Implement the Search component in the restaurants list.


## Deployment app
https://food-on-hand-app.vercel.app/

## Run

```
    npm install
    npm run start
```

```
    yarn install
    yarn run start
```

Starts on `http://localhost:3000`

## Build

```
    npm run build
```

## Development technologies and external packages

- React.js
- Typescript
- React Router V6
- Redux Toolkit
- Jest & React testing library
- Sass
- Eslint & Prettier
- Axios
