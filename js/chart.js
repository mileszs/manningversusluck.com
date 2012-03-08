var chart1; // globally available
$(document).ready(function() {
  chart1 = new Highcharts.Chart({
    chart: {
      renderTo: 'container',
      type: 'line'
    },
    title: {
      text: 'Cmp% Comparison'
    },
    xAxis: {
      title: {
        text: 'Game'
      },
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
    },
    yAxis: {
      title: {
        text: 'Cmp%'
      }
    },
    series: [{
      name: 'Manning',
      data: [56.8, 63.6, 45.5, 59.4, 52.2, 48.8, 60.0, 57.7, 52.4, 59.1, 48.3, 64.3, 70.4, 65.4, 59.0, 50.0]
    }, {
      name: 'Luck',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }]
  });
});
