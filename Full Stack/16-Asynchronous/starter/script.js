"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const whereAmI = async function (country) {
  try {
    const response1 = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response1.ok)
      throw new Error(
        `Could not retrieve country data 🤦🏾‍♂️ <br> (Status: ${response1.status}) 
        <br> Please check spelling of country entered`
      );
    const countryData1 = await response1.json();
    renderCountry(countryData1[0]);
  } catch (err) {
    renderError(`Something went wrong ❌❌ ${err.message}`);
  }
};

const renderCountry = function (countryData1, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${
      Object.values(countryData1.flags ?? {})[0]
    }" />
    <div class="country__data">
      <h3 class="country__name">${
        Object.values(countryData1.name ?? {})[0]
      }</h3>
      <h4 class="country__region">${countryData1.region}</h4>
      <p class="country__row"><span>👨🏾‍🤝‍👩🏾</span>${(
        +countryData1.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(countryData1.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(countryData1.currencies)[0]?.name ??
        "No current currency found"
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
whereAmI("Tanzania");
