// calculate_calories.js

// Function to calculate calories from food based on type and weight
function getCaloriesFromFood(foodType, weight) {
    // Example calorie values (you can adjust these values based on actual data)
    const calorieData = {
        "apple": 52, // calories per 100g
        "banana": 89,
        "chicken": 239,
        "rice": 130
        // Add more food items and their calorie values
    };

    const caloriesPer100g = calorieData[foodType.toLowerCase()] || 0; // Default to 0 if not found
    return (caloriesPer100g * weight) / 100; // Calculate total calories
}

// Function to calculate calories burned from activity
function calculateActivityCalories(distance, time) {
    // Assume average calories burned per km per kg
    const averageCaloriesPerKm = 50; // Adjust based on activity type
    const weight = 70; // Assume average weight in kg, can be replaced by user input if needed
    return (distance * averageCaloriesPerKm) * weight;
}

// Function to calculate calories based on heart rate and duration
function calculateHeartRateCalories(heartRate, duration) {
    // Basic estimation of calories burned based on heart rate
    // Formula: Calories = (Heart Rate x Duration in minutes) / 100
    return (heartRate * duration) / 100;
}

// Main function to calculate total calories from all sources
function calculateCalories() {
    const foodData = JSON.parse(localStorage.getItem('foodData'));
    const activityData = JSON.parse(localStorage.getItem('activityData'));
    const heartRateData = JSON.parse(localStorage.getItem('heartRateData'));

    let totalCalories = 0;

    // Calculate from food intake
    if (foodData) {
        totalCalories += getCaloriesFromFood(foodData.type, foodData.weight);
    }

    // Calculate from activity
    if (activityData) {
        totalCalories += calculateActivityCalories(activityData.distance, activityData.time);
    }

    // Calculate from heart rate
    if (heartRateData) {
        totalCalories += calculateHeartRateCalories(heartRateData.heartRate, heartRateData.duration);
    }

    return totalCalories;
}
