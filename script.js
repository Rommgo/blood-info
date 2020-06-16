google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

var chart;
var arr = [
    ['Year', 'WBC', 'RBC', 'HGB', 'HCT', 'MCV', 'MCH', 'MCHC', 'PLT', 'LYM%', 'MXD%', 'NEUT%', 'LYM#', 'MXD#', 'NEUT#'],
    ['28.08.2019', 7.8, 5.00, 153, 0.452, 90.4, 30.6, 338, 217, 0.233, 0.101, 0.666, 1.8, 0.8, 5.2],
    ['19.11.2019', 7.0, 4.81, 150, 0.436, 90.6, 31.2, 344, 172, 0.248, 0.084, 0.668, 1.7, 0.6, 4.7],
    ['05.03.2020', 6.1, 4.97, 156, 0.461, 92.8, 31.4, 338, 193, 0.276, 0.087, 0.637, 1.7, 0.5, 3.9],
    ['15.06.2020', 5.9, 5.00, 150, 0.460, 92.0, 30.0, 326, 191, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
]

var options = {
    title: 'Blood info',
    curveType: 'function',
    legend: {position: 'right'},
    hAxis: {minValue: 0, maxValue: 9},
    pointSize: 4,
};

// build button section
arr[0].forEach(function (value, key) {
    key > 0 ? $('#list').append(`<li><button data-position="${key}">${value}</button></li>`) : "";
})


// function init chart
function drawChart() {
    var data = google.visualization.arrayToDataTable(sortArrFunction(1));
    chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}

$("button").on("click", function () {
    var data = google.visualization.arrayToDataTable(sortArrFunction($(this).data("position")));
    chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
})


function sortArrFunction(place) {
    const sortarr = arr.map(function (x) {
        let newArr = []
        newArr.push(x[0])
        newArr.push(x[place])
        return newArr
    })
    return sortarr
}
