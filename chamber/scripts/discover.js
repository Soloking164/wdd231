fetch('./data/discover.json')
 .then(response => response.json())
 .then(data => {
    const cardsContainer = document.querySelector('.cards');

    data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = ` 
            <h2>${item.title}</h2> 

            <figure> <img src="images/${item.image}" alt="${item.title}" > 
            </figure> <address>${item.address}             
            </address> 
            <p>${item.description}</p> 
            <button class="button" loading="lazy">Learn More</button> `;
            cardsContainer.appendChild(card);
        });
});

const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentTime = Date.now();

if ( !lastVisit) {
    visitMessage.textContent='Welcome! Let us know if you have any questions.';
}else{
    const timeDiff = currentTime - lastVisit;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        visitMessage.textContent='Back so soon! Awesome!';
    }

    else if (daysDiff === 1) {
        visitMessage.textContent = 'You last visited 1 day ago.';
    }

    else {
        visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem('lastVisit', currentTime);