
$( document ).ready(function() {
    // json = JSON.parse(data)
    console.log(data.dateRange)
    console.log(data.totalSales.receipts)
    $("#receiptsDATA").text(data.totalSales.receipts)
    $("#salesDATA").text(data.totalSales.sales)
    $("#percentDATA").text(data.totalSales.sellThru)
});