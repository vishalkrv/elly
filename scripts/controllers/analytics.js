'use strict';
/**
 * @ngdoc function
 * @name ellyApp.controller:AnalyticsCtrl
 * @description
 * # AnalyticsCtrl
 * Controller of the ellyApp
 */
angular.module('ellyApp').controller('AnalyticsCtrl',['$scope', '$http',  function($scope, $http) {
    
                var area = new Morris.Area({
                    element: 'revenue-chart',
                    resize: true,
                    data: [
                        {y: '2011 Q1', item1: 2666, item2: 2666},
                        {y: '2011 Q2', item1: 2778, item2: 2294},
                        {y: '2011 Q3', item1: 4912, item2: 1969},
                        {y: '2011 Q4', item1: 3767, item2: 3597},
                        {y: '2012 Q1', item1: 6810, item2: 1914},
                        {y: '2012 Q2', item1: 5670, item2: 4293},
                        {y: '2012 Q3', item1: 4820, item2: 3795},
                        {y: '2012 Q4', item1: 15073, item2: 5967},
                        {y: '2013 Q1', item1: 10687, item2: 4460},
                        {y: '2013 Q2', item1: 8432, item2: 5713}
                    ],
                    xkey: 'y',
                    ykeys: ['item1', 'item2'],
                    labels: ['Item 1', 'Item 2'],
                    lineColors: ['#a0d0e0', '#3c8dbc'],
                    hideHover: 'auto'
                });

                var donut = new Morris.Donut({
                    element: 'sales-chart',
                    resize: true,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: [
                        {label: "Download Sales", value: 12},
                        {label: "In-Store Sales", value: 30},
                        {label: "Mail-Order Sales", value: 20}
                    ],
                    hideHover: 'auto'
                });

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

            var sampleDataPath = 'sampledata/yelp_user_reviews.json';

            /*$http.get(sampleDataPath).success(function(data){
                console.log(data);
            }).error(function(data){
                console.log(data);
            });
*/
}]);