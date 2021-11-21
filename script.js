const form = document.forms[0];
const details = [];

const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (e) => {
  const animalName = document.getElementById("animal-input").value;
  const breedName = document.getElementById("breed-input").value;
  const cityName = document.getElementById("city-input").value;
  const email = document.getElementById("email-input").value;

  details.push({
    animal: animalName,
    breed: breedName,
    city: cityName,
    email: email,
  });

  alert("Thank you for your submission!");
  form.reset();
  e.preventDefault();
});
