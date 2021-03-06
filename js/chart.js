var cmp_percentage;
var interceptions;
var touchdowns;
var quarterback_rating;
$(document).ready(function() {
  quarterback_rating = new Highcharts.Chart({
    chart: {
      renderTo: 'quarterback-rating',
      type: 'line'
    },
    title: {
      text: 'Quarterback Rating',
      align: 'left',
    },
    xAxis: {
      title: {
        text: 'Game'
      },
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
    },
    yAxis: {
      title: {
        text: 'Rating'
      }
    },
    series: [{
      name: 'Rookie Manning',
      data: [58.6, 51.1, 39.3, 63.2, 66.8, 62.6, 117.5, 69.2, 47.7, 81.3, 48.6, 105.0, 79.1, 128.7, 84.9, 56.6]
    }, {
      name: 'Luck',
      data: [52.9,107.5, 75.7,81.0,51.3,74.8,89.5, 105.6, 80.1, 63.3, 71.9, 70.8,50.6,95.6,76.5,96.0]
    }, {
      name: '2012 Manning',
      data: [129.2, 58.5, 83.0,130.0,115.4,129.0,138.9,105.8,103.1,92.4,90.5,103.2,95.8,94.9,106.6,144.8]
    }]
  });

  cmp_percentage = new Highcharts.Chart({
    chart: {
      renderTo: 'cmp-percentage',
      type: 'line'
    },
    title: {
      text: 'Completion Percentage',
      align: 'left',
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
      name: 'Rookie Manning',
      data: [56.8, 63.6, 45.5, 59.4, 52.2, 48.8, 60.0, 57.7, 52.4, 59.1, 48.3, 64.3, 70.4, 65.4, 59.0, 50.0]
    }, {
      name: 'Luck',
      data: [51.1,64.5,47.8,56.4,50.0,55.2,68.4,62.5,69.2,54.0,54.1,44.4,47.1,48.1,48.6,50.0]
    }, {
      name: '2012 Manning',
      data: [73.1,64.9,50.0,78.9,70.5,80.0,73.3,77.1,71.1,59.5,59.5,71.1,72.2,60.7,69.8,79.3]
    }]
  });

  yards = new Highcharts.Chart({
    chart: {
      renderTo: 'yards',
      type: 'line'
    },
    title: {
      text: 'Yards',
      align: 'left',
    },
    xAxis: {
      title: {
        text: 'Game'
      },
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
    },
    yAxis: {
      title: {
        text: 'Yards'
      },
      min: 0,
      startOnTick: true,
      allowDecimals: false
    },
    series: [{
      name: 'Rookie Manning',
      data: [302,188,193,309,137,235,231,278,140,276,164,357,159,210,335,225]
    }, {
      name: 'Luck',
      data: [309,224,313,362,280,186,297,433,227,334,240,391,196,186,205,191]
    }, {
      name: '2012 Manning',
      data: [253,241,330,338,337,309,305,291,301,270,285,242,310,204,339,304]
    }]
  });

  interceptions = new Highcharts.Chart({
    chart: {
      renderTo: 'interceptions',
      type: 'line'
    },
    title: {
      text: 'Interceptions',
      align: 'left',
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
      },
      min: 0,
      startOnTick: true,
      allowDecimals: false
    },
    series: [{
      name: 'Rookie Manning',
      data: [3,3,2,3,1,2,0,2,2,2,2,1,2,0,1,2]
    }, {
      name: 'Luck',
      data: [3,0,1,1,2,0,1,0,1,3,1,3,2,0,0,0]
    }, {
      name: '2012 Manning',
      data: [0,3,0,0,0,1,0,2,0,1,1,1,1,0,1,0]
    }]
  });

  touchdowns = new Highcharts.Chart({
    chart: {
      renderTo: 'touchdowns',
      type: 'line'
    },
    title: {
      text: 'Touchdowns',
      align: 'left',
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
      },
      min: 0,
      startOnTick: true,
      allowDecimals: false
    },
    series: [{
      name: 'Rookie Manning',
      data: [1,1,0,1,1,2,3,2,1,3,1,3,2,3,1,1]
    }, {
      name: 'Luck',
      data: [1,2,2,2,0,0,1,2,0,2,1,4,1,2,1,2]
    }, {
      name: '2012 Manning',
      data: [2,1,2,3,3,3,3,3,1,3,2,3,1,1,3,3]
    }]
  });
});
