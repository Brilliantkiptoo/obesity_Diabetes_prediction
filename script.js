document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("prediction-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate form inputs
        const obesityRate = document.getElementById("obesity-rate").value;
        const selenium = document.getElementById("selenium").value;
        const vitaminE = document.getElementById("vitamin-e").value;
        const dietarySodium = document.getElementById("dietary-sodium").value;
        const vitaminD = document.getElementById("vitamin-d").value;

        // Check if any field is empty
        if (!obesityRate || !selenium || !vitaminE || !dietarySodium || !vitaminD) {
            alert("Please fill in all fields.");
            return;
        }

        // Check if obesity rate is within range
        if (obesityRate < 0 || obesityRate > 100) {
            alert("Obesity rate must be between 0 and 100.");
            return;
        }

        // Check if dietary sodium is a positive number
        if (dietarySodium < 0) {
            alert("Dietary sodium must be a positive number.");
            return;
        }

        // Check if vitamin D is a positive number
        if (vitaminD < 0) {
            alert("Vitamin D level must be a positive number.");
            return;
        }

        // If all validations pass, submit the form
        form.submit();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const landingForm = document.getElementById("landing-form");

    // Get user's name from landing page form
    const firstNameInput = document.getElementById("first-name");

    // Check if landing page form exists
    if (landingForm) {
        // Event listener for landing page form submission
        landingForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const firstName = firstNameInput.value.trim();
            
            if (firstName) {
                // Redirect to prediction form page with name parameter
                window.location.href = "prediction-form.html?name=" + encodeURIComponent(firstName);
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const landingForm = document.getElementById("user-info-form");
    const submitButton = landingForm.querySelector('button[type="submit"]');

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        window.location.href = "prediction-form.html";
    });
});



const aboutButton = document.getElementById('aboutButton');
const aboutSection = document.getElementById('about');

aboutButton.addEventListener('click', function() {
  aboutSection.classList.toggle('hidden');
});



document.addEventListener('DOMContentLoaded', () => {
    // Your code to fetch the CSV file and populate the dropdown
    fetch('data.csv')
      .then(response => response.text())
      .then(data => {
        const rows = data.trim().split('\n');
        const nationalDishSelect = document.getElementById('national-dish');
  
        // Assuming the column containing national dishes is the third column (index 2)
        const nationalDishColumnIndex = 2;
  
        nationalDishSelect.innerHTML = '';
  
        // Skip the header row
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i].split(',');
          const dish = row[nationalDishColumnIndex];
  
          if (dish) {
            const option = document.createElement('option');
            option.value = dish;
            option.text = dish;
            nationalDishSelect.add(option);
          }
        }
      })
      .catch(error => console.error('Error fetching CSV:', error));
  });