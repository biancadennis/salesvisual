
$( document ).ready(function() {
    console.log(data.dateRange)
    var chartDoughnutDataLabels = []
    var chartDoughnutData = []
    data.salesByChannel.forEach(function(element) {
        chartDoughnutDataLabels.push(element.channel)
        chartDoughnutData.push(element.sales)
    }, this);
// Total Sales Section
    $("#receiptsDATA").text(data.totalSales.receipts)
    $("#salesDATA").text(data.totalSales.sales)
    $("#percentDATA").text(data.totalSales.sellThru)

// Doughnut chart section
    var ctx = document.getElementById('myDoughnutChart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: chartDoughnutData,
                backgroundColor: [
                'rgba(14, 101, 241, 1)',
                'rgba(8, 58, 145, 1)'
                ],
            }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: chartDoughnutDataLabels
        }
    });
});