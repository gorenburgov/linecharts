Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {

    let data2 = data.map((item) => [item[0], item[1]*(1 + 0.1*Math.random())]);
    let data3 = data.map((item) => [item[0], item[1]*0.1*Math.random()]);

    // Create the chart
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL Stock Price',
            data: data,
            type: 'spline',
            tooltip: {
                valueDecimals: 2
            }
        },{
            name: 'AAPL Stock Price',
            data: data2,
            type: 'spline',
            tooltip: {
                valueDecimals: 2
            }
        },{
            name: 'AAPL Stock Price',
            data: data3,
            type: 'spline',
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});