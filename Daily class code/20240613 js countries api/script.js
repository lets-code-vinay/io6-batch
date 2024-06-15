const countryContainer = document.querySelector(".country-container");

const allCountriesApi = "https://restcountries.com/v3.1/all";

const getCountriesData = async () => {
  try {
    const countriesData = await fetch(allCountriesApi);
    const countriesResponse = await countriesData.json();

    console.log("countriesResponse", countriesResponse);

    countriesResponse.forEach((country, index) => {
      console.log("country", country);
      const {
        name: { common = "" } = {},
        flags: { png = "" } = {},
        population = 0,
        continents = [],
      } = country || {};

      const newDiv = document.createElement("div");
      newDiv.classList.add("card");
      newDiv.style.width = "18rem";

      newDiv.innerHTML = `
      <img src=${png} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${common}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Population : <strong>${population}</strong></li>
        <li class="list-group-item">continents:  <strong>${continents}</strong>      </li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
      <button class='btn btn-primary' onclick=goToCountry(country)>Visit</button>
        <a href="#" class="card-link">Another link</a>
      </div>
      `;

      countryContainer.append(newDiv);
    });
  } catch (error) {
    console.error("error in fetching county datas", error);
  }
};

{
  /* <a href="./pages/page.html" class="card-link">Visit Country</a> */
}

const goToCountry = (country) => {
  console.log("clicked", country);
};
