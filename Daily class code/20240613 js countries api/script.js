const countryContainer = document.querySelector(".country-container");
const singleCountryContainer = document.querySelector(
  ".single-country-container"
);
const searchInput = document.querySelector("#search-country");
const selectedCountyFlag = singleCountryContainer.querySelector(".county-flag");
const selectCountryName = singleCountryContainer.querySelector(".county-name");

const allCountriesApi = "https://restcountries.com/v3.1/all";
const getByCountyName = `https://restcountries.com/v3.1/name/{name}?fullText=true`;

const getCountriesData = async () => {
  singleCountryContainer.classList.add("d-none");
  countryContainer.classList.remove("d-none");
  localStorage.clear();

  try {
    const countriesData = await fetch(allCountriesApi);
    const countriesResponse = await countriesData.json();

    console.log("countriesResponse", countriesResponse);

    countriesResponse.forEach((country, index) => {
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
      <button class='btn btn-primary visit-btn' >Visit</button>
        <a href="#" class="card-link">Another link</a>
      </div>
      `;

      countryContainer.append(newDiv);

      // newDiv.querySelector(".visit-btn").addEventListener("click", () => {
      //   goToCountry(country);
      // });

      const visitBtn = newDiv.querySelector(".visit-btn");

      visitBtn.addEventListener("click", () => goToCountry(common));
    });
  } catch (error) {
    console.error("error in fetching county datas", error);
  }
};

{
  /* <a href="./pages/page.html" class="card-link">Visit Country</a> */
}

const goToCountry = async (countryName = {}) => {
  console.log("clicked---", countryName);
  singleCountryContainer.innerHTML = ``;

  localStorage.setItem("selectedCountryName", JSON.stringify(countryName));

  const countryResponse = await fetch(
    getByCountyName.replace("{name}", countryName)
  );
  const [countryData] = await countryResponse.json();

  console.log("countryData", countryData);

  countryContainer.classList.add("d-none");

  setTimeout(() => {
    singleCountryContainer.classList.remove("d-none");
    // selectedCountyFlag.setAttribute("scr", countryData?.flags?.png);
    // selectedCountyFlag.src = countryData?.flags?.png;
    const selectedCountry = document.createElement("div");
    selectedCountry.classList.add("selected-country-area");
    selectedCountry.innerHTML = `
    <div class="left-section">
    <img src=${countryData?.coatOfArms?.png} class="card-img-top" alt="...">
    </div>
          <div class="middle-section">           
          <div class="card" >
  <img src=${countryData?.flags?.png} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${countryData?.name?.common}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Capital: <strong>${
      countryData?.capital
    }</strong></li>
    <li class="list-group-item">Continent: <strong>${
      countryData?.continents
    }</strong></li>
    <li class="list-group-item">Is Independent: <strong>${
      countryData?.independent
    }</strong></li>
    <li class="list-group-item">Languages: <strong>${Object.values(
      countryData?.languages
    )}</strong></li>
    <li class="list-group-item">Population: <strong>${
      countryData?.population
    }</strong></li>
  </ul>
 
</div>
</div>`;
    singleCountryContainer.append(selectedCountry);
  }, 500);
};

const getSearchedCountry = () => {
  console.log("searchInput", searchInput.value);
  goToCountry(searchInput.value);
};

const obj = { name: "Ankit", age: 25 };
const newObj = obj;
newObj.age = 35;

console.log("obj-->", obj?.age);
console.log("nw obj-->", newObj?.age);
/**
 * C: 25, 35 , Unable to change in const
 * A: 25, 50 ,
 * T: 25, 35
 * P: 25, 35
 *
 * V: 35,35
 */
