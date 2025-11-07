const membersURL = "./data/members.json";
let lineView = document.querySelector(".line-view-table");
const photoGrid = document.querySelector(".photo-grid-btn");
const lineGrid = document.querySelector(".line-grid-btn");
const table = document.querySelector("table");
const cards = document.querySelector(".member-card");

for (let i = 0; i < membersURL.length; i++) {
    console.log(spotlightMembersURL[i].name)
  }


async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    memberCard(data);
    gridLineDisplay(data)
}

getMemberData();

lineView.style.display = "none";

lineGrid.addEventListener("click", () => {
    lineView.style.display = "block";
    cards.style.display = "none";
})

photoGrid.addEventListener("click", () => {  
    lineView.style.display = "none";
    cards.style.display = "grid";
})


function memberCard(members) {
    members.forEach(member => {
        const memberdetails = document.createElement("div");
        const memberLogo = document.createElement("img");
        const memberAddress = document.createElement("p");
        const memberPhone = document.createElement("p");
        const memberWebsite = document.createElement("p");
        const shadedBorder = document.createElement("div");

        memberdetails.setAttribute("class", "member-details");
        memberLogo.setAttribute("src", member.image);
        memberLogo.setAttribute("alt", "members logo");
        memberLogo.setAttribute("width", "60");
        memberLogo.setAttribute("height", "60");
        shadedBorder.setAttribute("class", "shaded-border")

        memberAddress.textContent = member.address;
        memberPhone.textContent = member.phone;
        memberWebsite.innerHTML = `<a href="#">${member.url}</a>`;
        
        memberdetails.appendChild(memberLogo);
        memberdetails.appendChild(memberAddress);
        memberdetails.appendChild(memberPhone);
        memberdetails.appendChild(memberWebsite);
        memberdetails.appendChild(shadedBorder);

        cards.appendChild(memberdetails);
    })
}

function gridLineDisplay(members) {
    members.forEach(member => {
        const tableRow = document.createElement("tr");
        const memberName = document.createElement("td");
        const memberPhone = document.createElement("td");
        const website = document.createElement("td");
        const memberAddress = document.createElement("td");

        memberName.textContent = member.name;
        memberPhone.textContent = member.phone;
        website.textContent = member.url;
        memberAddress.textContent = member.address

        tableRow.appendChild(memberName);
        tableRow.appendChild(memberAddress);
        tableRow.appendChild(memberPhone);
        tableRow.appendChild(website);

        table.appendChild(tableRow);
    })
}


// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }