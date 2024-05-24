$(document).ready(function () {
  console.log('jquery working');

  // Sample data for weekly sales
  const weeklySalesData = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [150, 200, 250, 300, 400, 500, 600],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the chart
  const config = {
    type: 'bar',
    data: weeklySalesData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Render the chart
  const ctx = document.getElementById('weeklySalesChart').getContext('2d');
  new Chart(ctx, config);
});
