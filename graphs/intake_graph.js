// intake_graph.js

// Sample data for demonstration
const intakeData = [
    { date: '2024-10-01', calories: 1800 },
    { date: '2024-10-02', calories: 1500 },
    { date: '2024-10-03', calories: 2000 },
    // Add more data points as needed
];

// Function to draw the intake graph
function drawIntakeGraph(ctx) {
    const data = [30, 50, 20, 60, 90]; // Example data for intake
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    new Chart(ctx, {
        type: 'bar', // You can change this to 'line', 'pie', etc.
        data: {
            labels: labels,
            datasets: [{
                label: 'Intake',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
