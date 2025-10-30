// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector("figcaption");

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=5bf3d3e13785fa06895c717e38cefa7f';


// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         displayResults(data); 
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }

//   function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     let desc = data.weather[0].description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
//   }

// //   6.32395797866259, 8.117465086509304 Abakaliki



const spotlightMembersURL = "./data/members.json";

function getSpotlights(data) {
  data.forEach(spotlightCard => { 
    const businessCardSection = document.createElement("div");
    businessCardSection.setAttribute("class", "business-card-section");
    const sportLightName = document.createElement("h3");
    sportLightName.textContent = data.name;
    const tagLine = document.createElement("p");
    tagLine.textContent = data.tag;
    businessCardSection.appendChild(sportLightName);
    businessCardSection.appendChild(tagLine);
    const businessDetailsContainer = document.createElement("div");
    businessDetailsContainer.setAttribute("class", "business-details-container");
    const sportLighLogo = ("img");
    sportLighLogo.setAttribute("src", data.image);
    sportLighLogo.setAttribute("alt", `${data.name} logo`);
    sportLighLogo.setAttribute("width", 70);
    sportLighLogo.setAttribute("height", 70);
    businessDetailsContainer.appendChild(sportLighLogo);
    
    const businessDetails = document.createElement("div");
    businessDetails.setAttribute("class", "business-details");

    const emailContainer = document.createElement("p");
    const emailCaption = document.createElement("span");
    emailCaption.textContent = "EMAIL";
    const email = document.createElement("span");
    email.textContent = data.email;
    emailContainer.appendChild(emailCaption);
    emailContainer.appendChild(email);
    businessDetails.appendChild(emailContainer);

    const phoneContainer = document.createElement("p");
    const phoneCaption = document.createElement("span");
    phoneCaption.textContent = "PHONE";
    const phone = document.createElement("span");
    email.textContent = data.phone;
    phoneContainer.appendChild(phoneCaption);
    phoneContainer.appendChild(phone);
    businessDetails.appendChild(phoneContainer);

    const urlContainer = document.createElement("p");
    const urlCaption = document.createElement("span");
    urlCaption.textContent = "URL";
    const url = document.createElement("span");
    url.textContent = data.url;
    urlContainer.appendChild(urlCaption);
    emailContainer.appendChild(urll);
    businessDetails.appendChild(urlContainer);

    const membershipContainer = document.createElement("p");
    const membershipCaption = document.createElement("span");
    emailCaption.textContent = "MEMBERSHIP LEVEL";
    const membership = document.createElement("span");
    membership.textContent = data.membership;
    membershipContainer.appendChild(membershipCaption);
    emailContainer.appendChild(membership);
    businessDetails.appendChild(membershipContainer);

    businessDetailsContainer.appendChild(businessDetails)
    businessCardSection.appendChild(businessDetailsContainer)

    document.querySelector(".business-card-container").appendChild(businessCardSection);
  })
}

getSpotlights(spotlightMembersURL);