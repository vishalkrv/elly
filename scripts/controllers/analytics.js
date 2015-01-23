'use strict';
/**
 * @ngdoc function
 * @name ellyApp.controller:AnalyticsCtrl
 * @description
 * # AnalyticsCtrl
 * Controller of the ellyApp
 */
angular.module('ellyApp').controller('AnalyticsCtrl', function($scope) {
    
	var data = [], totalPoints = 100;
                function getRandomData() {

                    if (data.length > 0)
                        data = data.slice(1);

                    // Do a random walk
                    while (data.length < totalPoints) {

                        var prev = data.length > 0 ? data[data.length - 1] : 50,
                                y = prev + Math.random() * 10 - 5;

                        if (y < 0) {
                            y = 0;
                        } else if (y > 100) {
                            y = 100;
                        }

                        data.push(y);
                    }

                    // Zip the generated y values with the x values
                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]]);
                    }

                    return res;
                }

                var interactive_plot = $.plot("#interactive", [getRandomData()], {
                    grid: {
                        borderColor: "#f3f3f3",
                        borderWidth: 1,
                        tickColor: "#f3f3f3"
                    },
                    series: {
                        shadowSize: 0, // Drawing is faster without shadows
                        color: "#3c8dbc"
                    },
                    lines: {
                        fill: true, //Converts the line chart to area chart
                        color: "#3c8dbc"
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        show: true
                    },
                    xaxis: {
                        show: true
                    }
                });

                function update() {

                    interactive_plot.setData([getRandomData()]);

                    // Since the axes don't change, we don't need to call plot.setupGrid()
                    interactive_plot.draw();
                    setTimeout(update, 500);
                }

                update();

                var bar = new Morris.Bar({
                    element: 'bar-chart',
                    resize: true,
                    data: [
                        {y: '2006', a: 100, b: 90},
                        {y: '2007', a: 75, b: 65},
                        {y: '2008', a: 50, b: 40},
                        {y: '2009', a: 75, b: 65},
                        {y: '2010', a: 50, b: 40},
                        {y: '2011', a: 75, b: 65},
                        {y: '2012', a: 100, b: 90}
                    ],
                    barColors: ['#00a65a', '#f56954'],
                    xkey: 'y',
                    ykeys: ['a', 'b'],
                    labels: ['CPU', 'DISK'],
                    hideHover: 'auto'
                });

		                //jvectormap data
		    var visitorsData = {
		        "US": 398, //USA
		        "SA": 400, //Saudi Arabia
		        "CA": 1000, //Canada
		        "DE": 500, //Germany
		        "FR": 760, //France
		        "CN": 300, //China
		        "AU": 700, //Australia
		        "BR": 600, //Brazil
		        "IN": 800, //India
		        "GB": 320, //Great Britain
		        "RU": 3000 //Russia
		    };
		    //World map by jvectormap
		    $('#world-map').vectorMap({
		        map: 'world_mill_en',
		        backgroundColor: "transparent",
		        regionStyle: {
		            initial: {
		                fill: '#e4e4e4',
		                "fill-opacity": 1,
		                stroke: 'none',
		                "stroke-width": 0,
		                "stroke-opacity": 1
		            }
		        },
		        series: {
		            regions: [{
		                    values: visitorsData,
		                    scale: ["#92c1dc", "#ebf4f9"],
		                    normalizeFunction: 'polynomial'
		                }]
		        },
		        onRegionLabelShow: function(e, el, code) {
		            if (typeof visitorsData[code] != "undefined")
		                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
		        }
		    });

});