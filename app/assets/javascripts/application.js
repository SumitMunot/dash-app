// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(function(){

	$('#slide-submenu').on('click',function() {			        
        $(this).closest('.list-group').fadeOut('slide',function(){
        	$('.mini-submenu').fadeIn();	
        });
        
      });

	$('.mini-submenu').on('click',function(){		
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
	})
})

$(function(){
	var chart = AmCharts.makeChart("stat-pie1-chartdiv", {
	    "type": "pie",
	    "theme": "none",
	    "dataProvider": [{
	        "title": "New",
	        "value": 4852
	    }, {
	        "title": "Returning",
	        "value": 9899
	    }],
	    "titleField": "title",
	    "valueField": "value",
	    "labelRadius": 1,

	    "radius": "42%",
	    "innerRadius": "90%",
	    "labelText": "[[title]]"
	});
})

$(function(){
	var chart = AmCharts.makeChart("stat-pie2-chartdiv", {
	    "type": "pie",
	    "theme": "none",
	    "dataProvider": [{
	        "title": "New",
	        "value": 4852
	    }, {
	        "title": "Returning",
	        "value": 9899
	    }],
	    "titleField": "title",
	    "valueField": "value",
	    "labelRadius": 1,

	    "radius": "42%",
	    "innerRadius": "90%",
	    "labelText": "[[title]]"
	});
})


$(function(){
	var chart = AmCharts.makeChart("stat-pie3-chartdiv", {
	    "type": "pie",
	    "theme": "none",
	    "dataProvider": [{
	        "title": "New",
	        "value": 4852
	    }, {
	        "title": "Returning",
	        "value": 9899
	    }],
	    "titleField": "title",
	    "valueField": "value",
	    "labelRadius": 1,

	    "radius": "42%",
	    "innerRadius": "90%",
	    "labelText": "[[title]]"
	});
})

$(function(){
	var chart = AmCharts.makeChart("stat-pie4-chartdiv", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [{
        "title": "New",
        "value": 4852
    }, {
        "title": "Returning",
        "value": 9899
    }],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 1,

    "radius": "42%",
    "innerRadius": "90%",
    "labelText": "[[title]]"
	});
})

function serialChart(users, sessions, pageviews){
	var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
     "pathToImages":"http://www.amcharts.com/lib/3/images/",
    "dataProvider": [{
        "values": "Users",
        "visits": users,
        "color": "#FF0F00"
    }, {
        "values": "Sessions",
        "visits": sessions,
        "color": "#FF6600"
    }, {
        "values": "Pageviews",
        "visits": pageviews,
        "color": "#FF9E01"
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "title": "Google analytics values"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "values",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
    },
    "amExport":{}
     
    });
}

function pieChart(users, sessions, pageviews){
  var chart = AmCharts.makeChart("barchartdiv", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [{
        "visits": "Users",
        "value": users
    }, {
        "visits": "Sessions",
        "value": sessions
    }, {
        "visits": "Pageviews",
        "value": pageviews
    }],
    "valueField": "value",
    "titleField": "visits",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
    "exportConfig":{    
      menuItems: [{
      icon: '/lib/3/images/export.png',
      format: 'png'   
      }]  
    }
	});
}

function serialCalkGraph(users, sessions, pageviews){
	var chartData = generateChartData(users, sessions, pageviews);
	var chart = AmCharts.makeChart("serialChalkChartdiv", {
	    "type": "serial",
	    "theme": "chalk",
	    "pathToImages": "http://www.amcharts.com/lib/3/images/",
	    "dataProvider": chartData,
	    "valueAxes": [{
	        "axisAlpha": 0.2,
	        "dashLength": 1,
	        "position": "left"
	    }],
	    "mouseWheelZoomEnabled":true,
	    "graphs": [{
	        "id":"g1",
	        "balloonText": "[[category]]<br /><b><span style='font-size:14px;'>value: [[value]]</span></b>",
	        "bullet": "round",
	        "bulletBorderAlpha": 1,
			"bulletColor":"#FFFFFF",
	        "hideBulletsCount": 50,
	        "title": "red line",
	        "valueField": "visits",
			"useLineColorForBulletBorder":true
	    }],
	    "chartScrollbar": {
	        "autoGridCount": true,
	        "graph": "g1",
	        "scrollbarHeight": 40
	    },
	    "chartCursor": {
	        "cursorPosition": "mouse"
	    },
	    "categoryField": "date",
	    "categoryAxis": {
	        "parseDates": true,
	        "axisColor": "#DADADA",
	        "dashLength": 1,
	        "minorGridEnabled": true
	    },
		"exportConfig":{
		  menuRight: '20px',
	      menuBottom: '30px',
	      menuItems: [{
	      icon: 'http://www.amcharts.com/lib/3/images/export.png',
	      format: 'png'	  
	      }]  
		}
	});

	chart.addListener("rendered", zoomChart);
	zoomChart();

	// this method is called when chart is first inited as we listen for "dataUpdated" event
	function zoomChart() {
	    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
	    chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
	}

}

// generate some random data, quite different range
function generateChartData(users, sessions, pageviews) {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 30);

  for (var i = 0; i < 1000; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      var newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);

      var visits = Math.round(Math.random() * (40 + i / 5)) + 20 + i;

      chartData.push({
          date: newDate,
          visits: visits
      });
  }
  return chartData;
	}