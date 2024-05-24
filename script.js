$(document).ready(function () {
  //   console.log('jquery working');

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

  const ctx = document.getElementById('weeklySalesChart').getContext('2d');
  new Chart(ctx, config);

  const totalSalesData = {
    labels: ['Electronics', 'Furniture', 'Groceries', 'Clothing', 'Toys'],
    datasets: [
      {
        label: 'Total Sales',
        data: [300, 150, 100, 200, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const configdonut = {
    type: 'doughnut',
    data: totalSalesData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw;
            },
          },
        },
      },
    },
  };

  const ctxdonut = document.getElementById('totalSalesChart').getContext('2d');
  new Chart(ctxdonut, configdonut);
});
