function funnelChart(user, sessions, pageviews) {
    var chart = AmCharts.makeChart("funnelchartdiv", {
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