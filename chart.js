google.load('visualization', '1', {'packages': ['corechart, bar']});

var drawChart = function () {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Week');
  data.addColumn('number', 'Cost by Human');
  data.addColumn('number', 'Cost by Algorithm');
  // console.log(data);
  
  var rows = [];

  for (var date in workCostData) {
    var cost = workCostData[date];
    dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate()+1); // offset for timezone shift to display on graph properly
    // console.log(dateObj);
    rows.push([dateObj, cost.human, cost.algorithm]);
    // return /*[{v: */[Number(row[0].match(/^(\d+)\-/)[1]), Number(row[0].match(/\-(\d+)\-/)[1])-1, Number(row[0].match(/\-(\d+)$/)[1])];
  }

  data.addRows(rows);

  var options = {
    chart: {
      title: 'Cost of Human vs Bruteforce Algorithm Scheduling of Gardener Routes',
      subtitle: 'Based on hours per week'
    },
    // series: {
    //   0: {axis: 'Human'},
    //   1: {axis: 'Algorithm'}
    // },
    // axes: {
    //   y: {
    //     Human: {label: 'Cost by Human Scheduling'},
    //     Algorithm: {label: 'Cost by Algorithm Scheduling'}
    //   }
    // },
    // hAxis: {
    //   title: 'Week',
    //   // format: 'yyyy-mm-dd',
    //   viewWindow: {
    //     min: [2015,0,5],
    //     max: [2015,11,28]
    //   }
    // },
    // vAxis: {
    //   title: 'Cost (in hours)', viewWindow: { min: 0, max: 1500 }, ticks: [0, 100, 200, 500, 800, 1000, 1400],
      // 1: { title: 'Bugs (in apparata)', viewWindow: { min: 0, max: 1500 }, ticks: [0, 100, 200, 500, 800, 1000, 1400]}
    // }
  };

  // var formatter = new google.visualization.DateFormat({formatType: 'long', timeZone: -8});
  // formatter.format(data, 0);

  var material = new google.charts.Bar(document.getElementById('chart_div'));
  material.draw(data, options);
};

google.setOnLoadCallback(drawChart);
