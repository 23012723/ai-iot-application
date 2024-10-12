// script.js

// Placeholder functions for logging food, activity, and heart rate
document.addEventListener('DOMContentLoaded', () => {
    const foodForm = document.getElementById('food-form');
    const activityForm = document.getElementById('activity-form');
    const heartForm = document.getElementById('heart-form');

    if (foodForm) {
        foodForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const foodType = document.getElementById('food-type').value;
            const foodWeight = document.getElementById('food-weight').value;
            console.log(`Logged food: ${foodType}, ${foodWeight} grams`);
        });
    }

    if (activityForm) {
        activityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const activityType = document.getElementById('activity-type').value;
            const activityDuration = document.getElementById('activity-duration').value;
            console.log(`Logged activity: ${activityType}, ${activityDuration} minutes`);
        });
    }

    if (heartForm) {
        heartForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const heartRate = document.getElementById('heart-rate').value;
            const activityType = document.getElementById('activity-type').value;
            console.log(`Logged heart rate: ${heartRate} bpm during ${activityType}`);
        });
    }

    // Dashboard: Display graphs for calories gained and burned
    const calorieGainChart = document.getElementById('calorieGainChart');
    const calorieBurnChart = document.getElementById('calorieBurnChart');

    if (calorieGainChart && calorieBurnChart) {
        const gainData = [200, 300, 250, 400, 350]; // Sample data for calorie gain
        const burnData = [150, 220, 300, 280, 400]; // Sample data for calorie burn

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
    // Placeholder for future functionalities
console.log("Smart Food App Initialized");

});
function calculateCalories() {
    const foodType = document.getElementById('foodType').value.toLowerCase();
    const weight = parseFloat(document.getElementById('weight').value);
    let caloriesPerGram = 0;

    // Basic calorie estimation for common foods
    const foodCalorieData = {
        apple: 0.52,  // calories per gram
        banana: 0.89,
        chicken: 2.39,
        rice: 1.3,
        // Add more food types and their corresponding calories per gram
    };

    if (foodCalorieData[foodType]) {
        caloriesPerGram = foodCalorieData[foodType];
        const totalCalories = weight * caloriesPerGram;
        document.getElementById('calories').value = totalCalories.toFixed(2);
    } else {
        alert("Food type not found. Please enter a valid food type.");
    }
}

// Add form submission logic as needed
document.getElementById('foodIntakeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    // Logic to log food intake can go here
});
function calculateCalories() {
    const foodType = document.getElementById('foodType').value.toLowerCase();
    const weight = parseFloat(document.getElementById('weight').value);
    let caloriesPerGram = 0;

    // Basic calorie estimation for common foods
    const foodCalorieData = {
        apple: 0.52,  // calories per gram
        banana: 0.89,
        chicken: 2.39,
        rice: 1.3,
        // Add more food types and their corresponding calories per gram
    };

    if (foodCalorieData[foodType]) {
        caloriesPerGram = foodCalorieData[foodType];
        const totalCalories = weight * caloriesPerGram;
        document.getElementById('calories').value = totalCalories.toFixed(2);
    } else {
        alert("Food type not found. Please enter a valid food type.");
    }
}

// Add form submission logic as needed
document.getElementById('foodIntakeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    // Logic to log food intake can go here
});
document.getElementById('activity-input-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const heartRate = parseFloat(document.getElementById('heart-rate').value);
    const distance = parseFloat(document.getElementById('distance').value);

    // Simple formula to estimate calories burned (this can be adjusted)
    const caloriesBurned = (heartRate * 0.6309 + distance * 2.2046) * 0.239; // Example formula

    // Show result to the user
    alert(`Estimated Calories Used: ${caloriesBurned.toFixed(2)} kcal`);
});
