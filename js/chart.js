var cmp_percentage; 
var interceptions; 
var touchdowns; 
$(document).ready(function() {
  cmp_percentage = new Highcharts.Chart({
    chart: {
      renderTo: 'cmp_percentage',
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
                      
  interceptions = new Highcharts.Chart({
    chart: {
      renderTo: 'interceptions',
      type: 'line'
    },
    title: {
      text: 'Interceptions'
    },
    xAxis: {
      title: {
        text: 'Game'
      },
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
    },
    yAxis: {
      title: {
        text: 'INTs'
      }
    },
    series: [{
      name: 'Manning',
      data: [3,3,2,3,1,2,0,2,2,2,2,1,2,0,1,2]
    }, {
      name: 'Luck',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }]
  });
                      
  touchdowns = new Highcharts.Chart({
    chart: {
      renderTo: 'touchdowns',
      type: 'line'
    },
    title: {
      text: 'Touchdowns'
    },
    xAxis: {
      title: {
        text: 'Game'
      },
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
    },
    yAxis: {
      title: {
        text: 'TDs'
      }
    },
    series: [{
      name: 'Manning',
      data: [1,1,0,1,1,2,3,2,1,3,1,3,2,3,1,1]
    }, {
      name: 'Luck',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }]
  });
});
