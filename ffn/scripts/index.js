const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const hamburgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');
const homeAnchor = document.querySelector(".home");
const discoverAnchor = document.querySelector(".discover");
const directoryAnchor = document.querySelector(".directory");
const joinAnchor = document.querySelector(".join");

const spotlightMembersURL = "./data/farmers.json";
for (let i = 0; i < spotlightMembersURL.length; i++) {
  console.log(spotlightMembersURL[i].name)
}


const todayTemperature = document.querySelector(".today");
const tomorrowTemperature = document.querySelector(".next-day");
const nextTomorrowTemperature = document.querySelector(".next-two-days");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const currentTemp = document.querySelector(".current-temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector(".description");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const myKey = "5bf3d3e13785fa06895c717e38cefa7f";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.32&lon=8.11&units=metric&appid=${myKey}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        displayWeatherForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    maxTemp.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;C`;
    minTemp.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    const options = {hour: '2-digit', minute:'2-digit'}
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], options);
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], options);
    sunrise.textContent = `Sunrise: ${sunriseTime}`;
    sunset.textContent = `Sunset: ${sunsetTime}`;
  }

const city = "Abakaliki"
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${myKey}&units=metric`;

// Fetch data from the API
fetch(forecastURL)
  .then(response => response.json())
  .then(data => {
    // Extract temperatures for today, tomorrow, and next tomorrow
    const todayTemp = data.list[0].main.temp;
    const tomorrowTemp = data.list[8].main.temp; // Assuming 3-hour intervals, 8 * 3 = 24 hours
    const nextTomorrowTemp = data.list[16].main.temp; // 16 * 3 = 48 hours

    // Get the correct days
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    const tomorrowDay = days[(currentDay + 1) % 7];
    const nextTomorrowDay = days[(currentDay + 2) % 7];

    // Display temperatures
    todayTemperature.innerHTML = `Today: <span>${Math.round(todayTemp)}°C</span>`;
    tomorrowTemperature.innerHTML = `${tomorrowDay}: <span>${Math.round(tomorrowTemp)}°C</span>`;
    nextTomorrowTemperature.innerHTML = `${nextTomorrowDay}: <span>${Math.round(nextTomorrowTemp)}°C</span>`;
  })
  .catch(error => console.error('Error fetching weather data:', error));


  fetch(spotlightMembersURL)
    .then(response => response.json())
    .then(data => getSpotlights(data.filter(item => item.membershipLevel > 1)))
    .catch(error => console.log("Error fetching data", error))

  function getSpotlights(data) {
    data.forEach(spotlightCard => { 
      const businessCardSection = document.createElement("div");
      businessCardSection.setAttribute("class", "business-card-section");
      const businessNameContainer = document.createElement("div");
      businessNameContainer.setAttribute("class", "business-name-container")
      const sportLightName = document.createElement("h3");
      sportLightName.textContent = spotlightCard.name;
      const tagLine = document.createElement("p");
      tagLine.textContent = spotlightCard.tag;
      businessNameContainer.appendChild(sportLightName);
      businessNameContainer.appendChild(tagLine);
      businessCardSection.appendChild(businessNameContainer);
      const businessDetailsContainer = document.createElement("div");
      businessDetailsContainer.setAttribute("class", "business-details-container");
      const sportLighLogo = document.createElement("img");
      sportLighLogo.setAttribute("src", spotlightCard.image);
      sportLighLogo.setAttribute("alt", `${spotlightCard.name} logo`);
      sportLighLogo.setAttribute("width", 70);
      sportLighLogo.setAttribute("height", 70);
      businessDetailsContainer.appendChild(sportLighLogo);
      
      const businessDetails = document.createElement("div");
      businessDetails.setAttribute("class", "business-details");

      const emailContainer = document.createElement("p");
      const emailCaption = document.createElement("span");
      emailCaption.textContent = "ADDRESS:";
      const email = document.createElement("span");
      email.textContent = spotlightCard.address;
      emailContainer.appendChild(emailCaption);
      emailContainer.appendChild(email);
      businessDetails.appendChild(emailContainer);

      const phoneContainer = document.createElement("p");
      const phoneCaption = document.createElement("span");
      phoneCaption.textContent = "PHONE:";
      const phone = document.createElement("span");
      phone.textContent = spotlightCard.phone;
      phoneContainer.appendChild(phoneCaption);
      phoneContainer.appendChild(phone);
      businessDetails.appendChild(phoneContainer);

      const urlContainer = document.createElement("p");
      const urlCaption = document.createElement("span");
      urlCaption.textContent = "EMAIL:";
      const url = document.createElement("span");
      url.textContent = spotlightCard.email;
      urlContainer.appendChild(urlCaption);
      urlContainer.appendChild(url);
      businessDetails.appendChild(urlContainer);

      const membershipContainer = document.createElement("p");
      const membershipCaption = document.createElement("span");
      membershipCaption.textContent = "MEMBERSHIP LEVEL:";
      const membership = document.createElement("span");
      membership.textContent = spotlightCard.membership;
      membershipContainer.appendChild(membershipCaption);
      membershipContainer.appendChild(membership);
      businessDetails.appendChild(membershipContainer);

      businessDetailsContainer.appendChild(businessDetails)
      businessCardSection.appendChild(businessDetailsContainer)

      document.querySelector(".business-card-container").appendChild(businessCardSection);
    })
  }


hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
});

homeAnchor.textContent = "📍 Home";
homeAnchor.style.borderBottom = "2px solid blue";

homeAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "📍 Home";
    homeAnchor.style.borderBottom = "2px solid blue";
    directoryAnchor.style.borderBottom = "";
    joinAnchor.style.borderBottom = "";
    discoverAnchor.textContent = "Discover";
    discoverAnchor.style.borderBottom = "";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "Join";
})

discoverAnchor.addEventListener("click", () => {
	  homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "📍 Discover";
    discoverAnchor.style.borderBottom = "2px solid blue";
    homeAnchor.style.borderBottom = "";
    directoryAnchor.style.borderBottom = "";
    joinAnchor.style.borderBottom = "";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "Join";
})

directoryAnchor.addEventListener("click", () => {
    homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "📍 Directory";
    directoryAnchor.style.borderBottom = "2px solid blue";
    discoverAnchor.style.borderBottom = "";
    homeAnchor.style.borderBottom = "";
    joinAnchor.style.borderBottom = "";
    joinAnchor.textContent = "Join";
})

joinAnchor.addEventListener("click", () => {
	homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "📍 Join";
    joinAnchor.style.borderBottom = "2px solid blue";
    discoverAnchor.style.borderBottom = "";
    homeAnchor.style.borderBottom = "";
    directoryAnchor.style.borderBottom = "";
})