document.addEventListener("DOMContentLoaded", () => {
  const offers = document.querySelectorAll(".offer");
  const totalElement = document.getElementById("total");

  // Price mapping for each unit option
  const prices = {
    "1-unit": 20.00,
    "2-unit": 40.00,
    "3-unit": 60.00,
  };

  offers.forEach((offer) => {
    const radio = offer.querySelector('input[name="offer"]');

    // Add event listener for radio button change
    radio.addEventListener("change", () => {
      const selectedValue = radio.value;

      // Show only the selectors for the selected offer
      offers.forEach((otherOffer) => {
        const selectors = otherOffer.querySelector(".selectors");
        const offerRadio = otherOffer.querySelector('input[name="offer"]');
        
        // Toggle "selected" class based on selection
        if (offerRadio.value === selectedValue) {
          selectors.style.display = "flex";
          otherOffer.classList.add("selected"); // Apply selected class to clicked offer
        } else {
          selectors.style.display = "none";
          otherOffer.classList.remove("selected"); // Remove selected class from unclicked offers
        }
      });

      // Update the total price
      totalElement.textContent = `$${prices[selectedValue].toFixed(2)} USD`;
    });
  });

  // Initialize: Hide all selectors except for the first selected option
  offers.forEach((offer) => {
    const radio = offer.querySelector('input[name="offer"]');
    const selectors = offer.querySelector(".selectors");
    if (!radio.checked) {
      selectors.style.display = "none";
    }
  });
});
