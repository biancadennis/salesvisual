
$( document ).ready(function() {
// Total Sales Section
    $("#receiptsDATA").text(data.totalSales.receipts)
    $("#salesDATA").text(data.totalSales.sales)
    $("#percentDATA").text(data.totalSales.sellThru + '%')

// Doughnut chart section
    var chartDoughnutDataLabels = []
    var chartDoughnutData = []

    data.salesByChannel.forEach(function(element) {
        chartDoughnutDataLabels.push(element.channel)
        chartDoughnutData.push(element.sales)
    }, this);
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
        },
        options: {
            legend: {
                position: 'right',
            }
        }
    });
    // Head to Head
    var dates=[]
    data.weeklySales.forEach(function(element) {
        dates.push(element.date)
    }, this);
    var length = dates.length - 1
    $(".start").text(`${moment(dates[0]).format("MMMM DD")}`)
    $(".end").text(`${moment(dates[length]).format("MMMM DD")}`)
    //Head to Head Bar Chart
    colors = []
    colorData = []
    // colorObjects =[]
    data.salesByColor.forEach(function(element) {
        colors.push(element.color_name)
        colorData.push(element.sales)
    }, this);
    var ctx2 = document.getElementById('myBarChart').getContext('2d');
    var myBarChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            datasets: [{
                data: colorData,
                backgroundColor: colors
            }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: colors
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }   
                }]
            }
        }
    });
    var salesData = []
    data.weeklySales.forEach(function(element) {
        salesData.push(element)
    }, this);
    salesData.reverse()
    salesData.forEach(function(element) {
        $('#sales').append(`
            <div class='salesList weeklySalesData'><div>${moment(element.date).format("MMMM DD")}</div><div>${element.sales}</div></div>`
        )          
    }, this);
});