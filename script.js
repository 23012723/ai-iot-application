document.addEventListener('DOMContentLoaded', () => {
    const foodForm = document.getElementById('food-form');
    const activityForm = document.getElementById('activity-form');
    const heartForm = document.getElementById('heart-form');

    // Food logging
    if (foodForm) {
        foodForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const foodType = document.getElementById('food-type').value.toLowerCase();
            const foodWeight = document.getElementById('food-weight').value;
            const totalCalories = calculateCalories(foodType, foodWeight);
            if (totalCalories) {
                console.log(`Logged food: ${foodType}, ${foodWeight} grams, ${totalCalories} kcal`);
            }
        });
    }

    // Activity logging
    if (activityForm) {
        activityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const activityType = document.getElementById('activity-type').value;
            const activityDuration = document.getElementById('activity-duration').value;
            console.log(`Logged activity: ${activityType}, ${activityDuration} minutes`);
        });
    }

    // Heart rate logging
    if (heartForm) {
        heartForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const heartRate = document.getElementById('heart-rate').value;
            const activityType = document.getElementById('activity-type').value;
            console.log(`Logged heart rate: ${heartRate} bpm during ${activityType}`);
        });
    }

    // Calories gained and burned charts
    const calorieGainChart = document.getElementById('calorieGainChart');
    const calorieBurnChart = document.getElementById('calorieBurnChart');

    if (calorieGainChart && calorieBurnChart) {
        const gainData = [200, 300, 250, 400, 350];
        const burnData = [150, 220, 300, 280, 400];

        // Chart for calories gained
        new Chart(calorieGainChart, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: 'Calories Gained',
                    data: gainData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }
        });

        // Chart for calories burned
        new Chart(calorieBurnChart, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: 'Calories Burned',
                    data: burnData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            }
        });
    }

    // Placeholder message
    console.log("Smart Food App Initialized");
});

// Function to calculate calories
function calculateCalories(foodType, weight) {
    const foodCalorieData = {
        apple: 0.52,
        banana: 0.89,
        chicken: 2.39,
        rice: 1.3,
        // Add more food types here
    };

    if (foodCalorieData[foodType]) {
        const caloriesPerGram = foodCalorieData[foodType];
        const totalCalories = weight * caloriesPerGram;
        return totalCalories.toFixed(2);
    } else {
        alert("Food type not found. Please enter a valid food type.");
        return null;
    }
}

// Dynamic data fetching for cells (if needed)
document.querySelectorAll('.data-cell').forEach((cell) => {
    cell.addEventListener('change', (event) => {
        let data = fetchDataFromCell(event.target.id);
        console.log(data); // Validate fetched data
    });
});

// Function to fetch data from a cell
function fetchDataFromCell(cellId) {
    const cellData = document.getElementById(cellId).value;
    if (cellData) {
        return cellData;
    } else {
        console.error('Data not found in cell:', cellId);
        return null;
    }
}

// Example dynamic table row insertion (ensure `data` is defined)
const data = [ 
    { field1: "Apple", field2: 200 }, 
    { field1: "Banana", field2: 150 }
]; // Replace this with real fetched data
for (let i = 0; i < data.length; i++) {
    let newRow = `<tr id="row${i}">
                    <td id="cell${i}_1">${data[i].field1}</td>
                    <td id="cell${i}_2">${data[i].field2}</td>
                  </tr>`;
    document.getElementById('dataTable').insertAdjacentHTML('beforeend', newRow);
}
document.getElementById('foodIntakeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    
    // Gather input data
    const foodType = document.getElementById('foodType').value;
    const weight = parseFloat(document.getElementById('weight').value); // Ensure weight is a number
    const calories = parseFloat(document.getElementById('calories').value); // Ensure calories are a number

    // Check if inputs are valid
    if (foodType && weight > 0 && !isNaN(calories)) {
        // Log food intake (or send it to your database)
        console.log(`Food: ${foodType}, Weight: ${weight}g, Calories: ${calories}`);

        alert('Food intake logged successfully!');
        // Reset the form
        document.getElementById('foodIntakeForm').reset();
    } else {
        alert('Please calculate the calories before logging food intake.');
    }
});

// Create a database of food types and their calories per gram values
const foodCaloriesPerGram = {
    "Apple": 0.52,  // 52 calories per 100g
    "Banana": 0.89, // 89 calories per 100g
    "Chicken": 2.39, // 239 calories per 100g
    "Rice": 1.30, // 130 calories per 100g
    // Add more food items as necessary
};

function calculateCalories() {
    // Get the food type and weight from the input fields
    const foodType = document.getElementById("foodType").value.trim(); // Trim spaces
    const weight = parseFloat(document.getElementById("weight").value); // Convert weight to a number

    // Check if the food type exists and weight is a valid number
    if (foodCaloriesPerGram.hasOwnProperty(foodType) && !isNaN(weight) && weight > 0) {
        // Calculate the calories
        const calories = foodCaloriesPerGram[foodType] * weight;
        // Update the calories input field with the calculated value
        document.getElementById("calories").value = calories.toFixed(2); // Show two decimal places
    } else {
        // Display error message for invalid input
        document.getElementById("calories").value = "Invalid input";
    }
}
