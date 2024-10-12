// output_graph.js

// Sample data for demonstration
const outputData = [
    { date: '2024-10-01', calories: 1600 },
    { date: '2024-10-02', calories: 1400 },
    { date: '2024-10-03', calories: 1700 },
    // Add more data points as needed
];

// Function to draw the output graph
function drawOutputGraph(ctx) {
    const data = [20, 40, 30, 80, 60]; // Example data for output
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    new Chart(ctx, {
        type: 'line', // Use a line chart for output
        data: {
            labels: labels,
            datasets: [{
                label: 'Output',
                data: data,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
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
