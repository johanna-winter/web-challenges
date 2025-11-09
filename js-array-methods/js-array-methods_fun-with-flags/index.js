import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  /*
    Part 1 Find method:
    const foundCountry = countries.find((country) => {
    return country.name.toLowerCase().startsWith(searchString.toLowerCase());
  });
  */

  const foundCountries = countries.filter((country) => {
    return country.name.toLowerCase().startsWith(searchString.toLowerCase());
  });

  console.log(foundCountries);

  if (foundCountries.length > 0) {
    foundCountries.forEach((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
