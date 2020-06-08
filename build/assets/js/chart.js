var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: "",
            lineTension: 0, 
            data: [6000, 8300, 5000, 4800, 9000, 7000, 4900, 3500],
            backgroundColor: [
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'rgba(231, 182, 86, 1)'
            ],
            borderWidth: 3,
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
});
