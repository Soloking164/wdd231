// const params = new URLSearchParams(window.location.search);
// const name = params.get('name'); // "John"
// const age = params.get('age'); // "30"

// if (params.has('name')) {
//     console.log('Name parameter exists!');
// }

// params.set('age', 31); // Update age to 31

// params.delete('name'); // Remove name parameter

// const queryString = params.toString(); // "age=31"


// set timestamp value
document.getElementById('timestamp').value = new Date().toISOString();

// animate membership cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.5}s`;
});

// // open modals
// const modalLinks = document.querySelectorAll('.learn-more');
// modalLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const modalId = link.getAttribute('data-modal');
//     document.getElementById(modalId).showModal();
//   });
// });


const modalNP = document.querySelector("#np-modal");
const closeNPModal = document.querySelector(".np-modal");
const openNPModal = document.querySelector(".np-learn-more");

const modalBronze = document.querySelector("#bronze-modal");
const closeBronzeModal = document.querySelector(".bronze-modal");
const openBronzeModal = document.querySelector(".bronze-learn-more");

const modalSilver = document.querySelector("#silver-modal");
const closeSilverModal = document.querySelector(".silver-modal");
const openSilverModal = document.querySelector(".silver-learn-more");

const modalGold = document.querySelector("#gold-modal");
const closeGoldModal = document.querySelector(".gold-modal");
const openGoldNPModal = document.querySelector(".gold-learn-more");


openNPModal.addEventListener("click", () => {
    modalNP.showModal();
  });
  
  closeNPModal.addEventListener("click", () => {
    modalNP.close();
  });

  openSilverModal.addEventListener("click", () => {
    modalSilver.showModal();
  });
  
  closeSilverModal.addEventListener("click", () => {
    modalSilver.close();
  });

  openBronzeModal.addEventListener("click", () => {
    modalBronze.showModal();
  });
  
  closeBronzeModal.addEventListener("click", () => {
    modalBronze.close();
  });

  openGoldNPModal.addEventListener("click", () => {
    modalGold.showModal();
  });
  
  closeGoldModal.addEventListener("click", () => {
    modalGold.close();
  });
