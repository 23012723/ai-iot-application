// generate_advice.js

// Function to generate advice based on total calories
function generateAdvice() {
    const totalCalories = calculateCalories();
    let advice = "";

    // Logic for generating advice based on total calories
    if (totalCalories < 2000) {
        advice = "You should consider increasing your calorie intake to meet your energy needs.";
    } else if (totalCalories > 2500) {
        advice = "Consider reducing your calorie intake to maintain a healthy balance.";
    } else {
        advice = "Great job! You're on the right track with your calorie management.";
    }

    // Display advice on the page
    document.getElementById('advice').innerText = advice; 
}

// Call generateAdvice function when the page loads or when needed
window.onload = generateAdvice; // Automatically generate advice on page load
