# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

* I decided to follow a simple folder structure. As the App grows we can create a `components` folder and re-use certain components.
* I used hooks to consume local storage and also the Simplyrets API. This could be extended in the future. For example for the Simplyrets we could add more endpoints.

TODO's

* I didn't have time to test the hook functions in isolation.
* CSS can be improved.
* More tests on the PropertyListing/index.js file are needed. I'm missing testing the different loading states.
* Add a component to represent a `loading` state.
* There is no cache invalidation on the API requests.
* There is no way to manually clear the cache.
* On error, there is button or link to retry loading the page.

# AC

- [x] Using [react-router](https://reactrouter.com/) *(included as a dependency)*, create the following page:
- Implement the following design:
  - [x] A global sticky header containing the page name
  - [x] Output the data from the SimplyRETS API into a list view of properties. Each
    property should at least display the following information: 
    - `bedrooms`
    - `bathsFull` + `bathsHalf` (ex: 1 full + 3 half = 2.5)
    - `area` (as Sq Ft)
    - `listPrice`
    - `address`
    - `listDate` (MM/DD/YY)
    - `photo[0]`
    - Favorite state: White outlined heart if not favorited, red heart if
      favorited. *(Heart SVG assets included.)*
  - [x] Use style definitions from Figma when possible
  - [x] Desktop and Mobile screen sizes are provided. All screen widths from 375 to
    1180 should be supported. Intermediate responsive behavior should be
    inferred.
- [x] Get data from the SimplyRETS property endpoint on Property Listings page load
  + cache in local storage
- [x] On the Property Listings page, the user can click the heart to save the mlsId
  associated. Store the saved/favorited properties in the browser local storage.
- [x] Add any tests to satisfy confidence in your application. *Be sure to document
  the types of tests you choose and why*
- [x] Styles can be handled in any manner you choose – i.e. sass, css, emotion,
  etc...
- [x] This application is expected to be built utilizing current patterns and best
  practices of React (i.e. hooks). *Please do not use any other 3rd-party state
  management libraries such as Redux or Mobx.* `react-query` is okay.
- [x] Explain any design decisions (*including items left out due to time
  constraints*) in the README.md file
