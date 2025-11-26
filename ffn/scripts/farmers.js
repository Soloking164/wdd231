const membersURL = "./data/farmers.json";
const cards = document.querySelector(".member-card");

async function getMemberData() {
    try {
        const response = await fetch(membersURL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        memberCard(data);
    } catch (error) {
        console.error('Error fetching member data:', error);
        cards.innerHTML = '<p>Oops, there was an ERROR loading member data...</p>';
    }
}

getMemberData();

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
        memberLogo.setAttribute("alt", "farmer's image");
        memberLogo.setAttribute("width", "60");
        memberLogo.setAttribute("height", "60");
        shadedBorder.setAttribute("class", "shaded-border")
        
        memberAddress.textContent = member.address;
        memberPhone.textContent = member.phone;
        memberWebsite.innerHTML = `<a href="#">${member.email}</a>`;
        
        memberdetails.appendChild(memberLogo);
        memberdetails.appendChild(memberAddress);
        memberdetails.appendChild(memberPhone);
        memberdetails.appendChild(memberWebsite);
        memberdetails.appendChild(shadedBorder);
        
        cards.appendChild(memberdetails);
    })
}