// show funnel chart for # of users, # of sessions & # of pageviews 
function funnelChart(user, sessions, pageviews) {
    var chart = AmCharts.makeChart("funnel-chart", {
        "type": "funnel",
        "theme": "light",
        "dataProvider": [{
            "title": "sessions",
            "value": sessions
        }, {
            "title": "pageviews",
            "value": pageviews
        }, {
            "title": "users",
            "value": sessions
        }],
        "balloon": {
            "fixedPosition": true
        },
        "valueField": "value",
        "titleField": "title",
        "marginRight": 240,
        "marginLeft": 50,
        "startX": -500,
        "rotate": true,
        "labelPosition": "right",
        "balloonText": "[[title]]: [[value]]n[[description]]",
    	"exportConfig":{
    	  "menuItems": [{
          "icon": '/lib/3/images/export.png',
          "format": 'png'	  
          }]  
    	}
    });

}

// show funnel chart for one thing api json
function stackedBarChart(){
  var chart = AmCharts.makeChart("stacked-bar-chart", {
      "type": "serial",
      "theme": "none",
      "depth3D":20,
      "angle":30,
      "legend": {
          "horizontalGap": 10,
          "useGraphSettings": true,
          "markerSize": 10
      },
      "dataProvider": [{
          "year": 2003,
          "europe": 2.5,
          "namerica": 2.5,
          "asia": 2.1,
          "lamerica": 1.2,
          "meast": 0.2,
          "africa": 0.1
      }, {
          "year": 2004,
          "europe": 2.6,
          "namerica": 2.7,
          "asia": 2.2,
          "lamerica": 1.3,
          "meast": 0.3,
          "africa": 0.1
      }, {
          "year": 2005,
          "europe": 2.8,
          "namerica": 2.9,
          "asia": 2.4,
          "lamerica": 1.4,
          "meast": 0.3,
          "africa": 0.1
      }],
      "valueAxes": [{
          "stackType": "regular",
          "axisAlpha": 0,        
          "gridAlpha": 0
      }],
      "graphs": [{
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Europe",
          "type": "column",
          "color": "#000000",
          "valueField": "europe"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "North America",
          "type": "column",
          "color": "#000000",
          "valueField": "namerica"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Asia-Pacific",
          "type": "column",
          "newStack": true,         
          "color": "#000000",
          "valueField": "asia"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Latin America",
          "type": "column",
          "color": "#000000",
          "valueField": "lamerica"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Middle-East",
          "type": "column",
          "color": "#000000",
          "valueField": "meast"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Africa",
          "type": "column",
          "color": "#000000",
          "valueField": "africa"
      }],
      "categoryField": "year",
      "categoryAxis": {
          "gridPosition": "start",
          "axisAlpha": 0,
          "gridAlpha": 0,
          "position": "left"
      },
      "exportConfig":{
          "menuTop":"20px",
          "menuRight":"20px",
          "menuItems": [{
          "icon": '/lib/3/images/export.png',
          "format": 'png'   
          }]  
      }
  });
  jQuery('.chart-input').off().on('input change',function() {
      var property    = jQuery(this).data('property');
      var target      = chart;
      chart.startDuration = 0;

      if ( property == 'topRadius') {
          target = chart.graphs[0];
          if ( this.value == 0 ) {
            this.value = undefined;
          }
      }

      target[property] = this.value;
      chart.validateNow();
  });
}

function stackedSingleBarChart(){
  var chart = AmCharts.makeChart("stacked-single-bar-chart", {
      "type": "serial",
      "theme": "none",
      "legend": {
          "horizontalGap": 10,
          "maxColumns": 1,
          "position": "right",
          "useGraphSettings": true,
          "markerSize": 10
      },
      "dataProvider": [{
          "year": 2003,
          "europe": 2.5,
          "namerica": 2.5,
          "asia": 2.1,
          "lamerica": 0.3,
          "meast": 0.2,
          "africa": 0.1
      }, {
          "year": 2004,
          "europe": 2.6,
          "namerica": 2.7,
          "asia": 2.2,
          "lamerica": 0.3,
          "meast": 0.3,
          "africa": 0.1
      }, {
          "year": 2005,
          "europe": 2.8,
          "namerica": 2.9,
          "asia": 2.4,
          "lamerica": 0.3,
          "meast": 0.3,
          "africa": 0.1
      }],
      "valueAxes": [{
          "stackType": "regular",
          "axisAlpha": 0.3,
          "gridAlpha": 0
      }],
      "graphs": [{
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Europe",
          "type": "column",
          "color": "#000000",
          "valueField": "europe"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "North America",
          "type": "column",
          "color": "#000000",
          "valueField": "namerica"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Asia-Pacific",
          "type": "column",
          "color": "#000000",
          "valueField": "asia"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Latin America",
          "type": "column",
          "color": "#000000",
          "valueField": "lamerica"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Middle-East",
          "type": "column",
          "color": "#000000",
          "valueField": "meast"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Africa",
          "type": "column",
          "color": "#000000",
          "valueField": "africa"
      }],
      "categoryField": "year",
      "categoryAxis": {
          "gridPosition": "start",
          "axisAlpha": 0,
          "gridAlpha": 0,
          "position": "left"
      },
      "exportConfig":{
          "menuTop":"20px",
          "menuRight":"20px",
          "menuItems": [{
          "icon": '/lib/3/images/export.png',
          "format": 'png'   
          }]  
      }
  });
}

function stackedHorizontalChart(){
  var chart = AmCharts.makeChart("stacked-horizontal-chart", {
    "type": "serial",
    "theme": "none",
      "legend": {
          "horizontalGap": 10,
          "maxColumns": 1,
          "position": "right",
      "useGraphSettings": true,
      "markerSize": 10
      },
      "dataProvider": [{
          "year": 2003,
          "europe": 2.5,
          "namerica": 2.5,
          "asia": 2.1,
          "lamerica": 0.3,
          "meast": 0.2,
          "africa": 0.1
      }, {
          "year": 2004,
          "europe": 2.6,
          "namerica": 2.7,
          "asia": 2.2,
          "lamerica": 0.3,
          "meast": 0.3,
          "africa": 0.1
      }, {
          "year": 2005,
          "europe": 2.8,
          "namerica": 2.9,
          "asia": 2.4,
          "lamerica": 0.3,
          "meast": 0.3,
          "africa": 0.1
      }],
      "valueAxes": [{
          "stackType": "regular",
          "axisAlpha": 0.5,
          "gridAlpha": 0
      }],
      "graphs": [{
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Europe",
          "type": "column",
      "color": "#000000",
          "valueField": "europe"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "North America",
          "type": "column",
      "color": "#000000",
          "valueField": "namerica"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Asia-Pacific",
          "type": "column",
      "color": "#000000",
          "valueField": "asia"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Latin America",
          "type": "column",
      "color": "#000000",
          "valueField": "lamerica"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Middle-East",
          "type": "column",
      "color": "#000000",
          "valueField": "meast"
      }, {
          "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
          "fillAlphas": 0.8,
          "labelText": "[[value]]",
          "lineAlpha": 0.3,
          "title": "Africa",
          "type": "column",
      "color": "#000000",
          "valueField": "africa"
      }],
      "rotate": true,
      "categoryField": "year",
      "categoryAxis": {
          "gridPosition": "start",
          "axisAlpha": 0,
          "gridAlpha": 0,
          "position": "left"
      },
    "exportConfig":{
        "menuTop":"0px",
        "menuItems": [{
        "icon": '/lib/3/images/export.png',
        "format": 'png'   
        }]  
      }
  });
}

function areaChart() {
  var chart = AmCharts.makeChart("area-chart", {
    "type": "serial",
    "theme": "none",
      "titles": [{
          "text": "Traffic incidents per year",
          "size": 15
      }],
       "pathToImages": "http://www.amcharts.com/lib/3/images/",
      "legend": {
          "align": "center",
          "equalWidths": false,
          "periodValueText": "total: [[value.sum]]",
          "valueAlign": "left",
          "valueText": "[[value]] ([[percents]]%)",
          "valueWidth": 100
      },
      "dataProvider": [{
          "year": "2000",
          "cars": 1587,
          "motorcycles": 650,
          "bicycles": 121
      }, {
          "year": "1995",
          "cars": 1567,
          "motorcycles": 683,
          "bicycles": 146
      }, {
          "year": "1996",
          "cars": 1617,
          "motorcycles": 691,
          "bicycles": 138
      }, {
          "year": "1997",
          "cars": 1630,
          "motorcycles": 642,
          "bicycles": 127
      }, {
          "year": "1998",
          "cars": 1660,
          "motorcycles": 699,
          "bicycles": 105
      }, {
          "year": "1999",
          "cars": 1683,
          "motorcycles": 721,
          "bicycles": 109
      }, {
          "year": "2000",
          "cars": 1691,
          "motorcycles": 737,
          "bicycles": 112
      }, {
          "year": "2001",
          "cars": 1298,
          "motorcycles": 680,
          "bicycles": 101
      }, {
          "year": "2002",
          "cars": 1275,
          "motorcycles": 664,
          "bicycles": 97
      }, {
          "year": "2003",
          "cars": 1246,
          "motorcycles": 648,
          "bicycles": 93
      }, {
          "year": "2004",
          "cars": 1218,
          "motorcycles": 637,
          "bicycles": 101
      }, {
          "year": "2005",
          "cars": 1213,
          "motorcycles": 633,
          "bicycles": 87
      }, {
          "year": "2006",
          "cars": 1199,
          "motorcycles": 621,
          "bicycles": 79
      }, {
          "year": "2007",
          "cars": 1110,
          "motorcycles": 210,
          "bicycles": 81
      }, {
          "year": "2008",
          "cars": 1165,
          "motorcycles": 232,
          "bicycles": 75
      }, {
          "year": "2009",
          "cars": 1145,
          "motorcycles": 219,
          "bicycles": 88
      }, {
          "year": "2010",
          "cars": 1163,
          "motorcycles": 201,
          "bicycles": 82
      }, {
          "year": "2011",
          "cars": 1180,
          "motorcycles": 285,
          "bicycles": 87
      }, {
          "year": "2012",
          "cars": 1159,
          "motorcycles": 277,
          "bicycles": 71
      }],
      "valueAxes": [{
          "stackType": "100%",
          "gridAlpha": 0.07,
          "position": "left",
          "title": "percent"
      }],
      "graphs": [{
          "balloonText": "<img src='http://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Cars",
          "valueField": "cars"
      }, {
          "balloonText": "<img src='http://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Motorcycles",
          "valueField": "motorcycles"
      }, {
          "balloonText": "<img src='http://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Bicycles",
          "valueField": "bicycles"
      }],
      "plotAreaBorderAlpha": 0,
      "marginLeft": 0,
      "marginBottom": 0,
      "chartCursor": {
          "cursorAlpha": 0,
          "zoomable": false
      },
      "categoryField": "year",
      "categoryAxis": {
          "startOnAxis": true,
          "axisColor": "#DADADA",
          "gridAlpha": 0.07
      },
      "exportConfig": {
          "menuTop": "10px",
          "menuRight": "11px",
          "menuItems": [{
              "icon": 'http://www.amcharts.com/lib/3/images/export.png',
              "format": 'png'
          }]
      }
  });
}


function timeBasedAreaChart() {
  var chartData = generateChartData();

  var chart = AmCharts.makeChart("time-based-area-chart", {
      "type": "serial",
    "theme": "none",
      "pathToImages": "http://www.amcharts.com/lib/3/images/",
      "dataProvider": chartData,
      "valueAxes": [{
          "position": "left",
          "title": "Unique visitors"
      }],
      "graphs": [{
          "fillAlphas": 0.4,
          "valueField": "visits"
      }],
      "chartScrollbar": {},
      "chartCursor": {
          "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
          "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
          "minPeriod": "mm",
          "parseDates": true
      }
  });

  chart.addListener("dataUpdated", zoomChart);
  // when we apply theme, the dataUpdated event is fired even before we add listener, so
  // we need to call zoomChart here
  zoomChart();
  // this method is called when chart is first inited as we listen for "dataUpdated" event
  function zoomChart() {
      // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
      chart.zoomToIndexes(chartData.length - 250, chartData.length - 1);
  }

  // generate some random data, quite different range
  function generateChartData() {
      var chartData = [];
      // current date
      var firstDate = new Date();
      // now set 500 minutes back
      firstDate.setMinutes(firstDate.getDate() - 1000);

      // and generate 500 data items
      for (var i = 0; i < 500; i++) {
          var newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          var visits = Math.round(Math.random() * 40 + 10 + i + Math.random() * i / 5);
          // add data item to the array
          chartData.push({
              date: newDate,
              visits: visits
          });
      }
      return chartData;
  }
}