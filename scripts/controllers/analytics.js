'use strict';
/**
 * @ngdoc function
 * @name ellyApp.controller:AnalyticsCtrl
 * @description
 * # AnalyticsCtrl
 * Controller of the ellyApp
 */
angular.module('ellyApp').controller('AnalyticsCtrl', ['$scope', '$http', '$location',
    function(scope, $http, $location) {
        scope.anlyObj = {
            demo: false,          
            entityId: '',
            entityObj: {},
            returnObj: [],
            load: function() {
                $('.splMap').hide();
                this.entityId = $location.search().entityId;
                if (this.entityId && this.entityId !== '4') {
                    this.init();
                } else if (this.entityId === '4') {
                    this.demo = true;
                    this.demoStart();
                } else {
                    $location.url('/');
                }
            },
            demoStart: function() {
                this.donut.start();
                this.line.start();
                $(".knob").knob();
                this.salesLine.start();
            },
            donut: {
                options: {
                    element: 'sales-chart',
                    resize: true,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: [{
                        label: "Download Sales",
                        value: 12
                    }, {
                        label: "In-Store Sales",
                        value: 30
                    }, {
                        label: "Mail-Order Sales",
                        value: 20
                    }],
                    hideHover: 'auto'
                },
                start: function() {
                    new Morris.Donut(this.options);
                }
            },
            salesLine: {
                options: {
                    element: 'line-chart',
                    resize: true,
                    data: [{
                        y: '2011 Q1',
                        item1: 2666
                    }, {
                        y: '2011 Q2',
                        item1: 2778
                    }, {
                        y: '2011 Q3',
                        item1: 4912
                    }, {
                        y: '2011 Q4',
                        item1: 3767
                    }, {
                        y: '2012 Q1',
                        item1: 6810
                    }, {
                        y: '2012 Q2',
                        item1: 5670
                    }, {
                        y: '2012 Q3',
                        item1: 4820
                    }, {
                        y: '2012 Q4',
                        item1: 15073
                    }, {
                        y: '2013 Q1',
                        item1: 10687
                    }, {
                        y: '2013 Q2',
                        item1: 8432
                    }],
                    xkey: 'y',
                    ykeys: ['item1'],
                    labels: ['Item 1'],
                    lineColors: ['#efefef'],
                    lineWidth: 2,
                    hideHover: 'auto',
                    gridTextColor: "#fff",
                    gridStrokeWidth: 0.4,
                    pointSize: 4,
                    pointStrokeColors: ["#efefef"],
                    gridLineColor: "#efefef",
                    gridTextFamily: "Open Sans",
                    gridTextSize: 10
                },
                start: function() {
                    new Morris.Line(this.options);
                }
            },
            line: {
                options: {
                    element: 'revenue-chart',
                    resize: true,
                    data: [{
                        y: '2011 Q1',
                        item1: 2666
                    }, {
                        y: '2011 Q2',
                        item1: 2778
                    }, {
                        y: '2011 Q3',
                        item1: 4912
                    }, {
                        y: '2011 Q4',
                        item1: 3767
                    }, {
                        y: '2012 Q1',
                        item1: 6810
                    }, {
                        y: '2012 Q2',
                        item1: 5670
                    }, {
                        y: '2012 Q3',
                        item1: 4820
                    }, {
                        y: '2012 Q4',
                        item1: 15073
                    }, {
                        y: '2013 Q1',
                        item1: 10687
                    }, {
                        y: '2013 Q2',
                        item1: 8432
                    }],
                    xkey: 'y',
                    ykeys: ['item1'],
                    labels: ['Item 1'],
                    lineColors: ['#3c8dbc'],
                    hideHover: 'auto'
                },
                start: function() {
                    new Morris.Line(this.options);
                }
            },
            bar: {
                options: {
                    resize: true,
                    barColors: ['#00a65a', '#f56954'],
                    /*xkey: 'businessid',
                    ykeys: ['total_reviews_for_business'],*/
                    labels: ['Total Reviews'],
                    hideHover: 'auto'
                },
                start: function() {
                    new Morris.Bar(this.options);
                }
            },
            done: function() {
                this.donut.start();
                this.line.start();
                for (var j = 0, len = scope.anlyObj.returnObj.length; j < len; j++) {                  
                   
                    var temp = _.keys(scope.anlyObj.returnObj[j][0]);
                    var arr = [];
                    arr.push(temp[1]);
                    var isGeo = _.contains(temp, 'state');
                    if (isGeo === true) {
                        
                        $('.splMap').show();
                        $('.test'+j).hide();                       
                        var myObj = {};
                        _.each(scope.anlyObj.returnObj[j], function(val, key){
                            var vals = _.values(val),
                                keys = vals[0],
                                values =vals[1];
                            var arr = ["US","SA","CA","DE","FR","CN","AU","BR","IN","GB","RU"];
                            var random = arr[Math.floor(Math.random() * arr.length)];
                            myObj[random]= values;
                        });                        
                        //World map by jvectormap
                        $('#world-maps').vectorMap({
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
                                    values: myObj,
                                    scale: ["#92c1dc", "#ebf4f9"],
                                    normalizeFunction: 'polynomial'
                                }]
                            },
                            onRegionLabelShow: function(e, el, code) {
                                if (typeof myObj[code] != "undefined") el.html(el.html() + ': ' + myObj[code] + ' reviews');
                            }
                        });
                    $('.headTitle-' + j).text(temp[1].toUpperCase().replace(/_/g, ' '));
                    } else {                        
                        this.bar.options.data = scope.anlyObj.returnObj[j];
                        this.bar.options.element = 'bar-chart-' + j;
                        this.bar.options.xkey = temp[0];
                        this.bar.options.ykeys = arr;
                        //this.bar.options.barName = temp[1];
                        $('.headTitle-' + j).text(temp[1].toUpperCase().replace(/_/g, ' '));
                        this.bar.start();
                    }
                }
            },
            fetchAnalyse: function() {
                var dir = this.entityObj.AnalyzedDirectory.split('/');
                this.dirName = dir[5];
                var that = this;
                this.count = 0;
                var names = _.keys(this.entityObj.AnalyzedFiles[0]);
                for (var i = 0, len = names.length; i < len; i++) {
                    var promise = $http.get('sampleData/' + this.dirName + '/' + names[i] + '.json').success(function(response) {
                        scope.anlyObj.returnObj.push(response);
                    }).error(function(response) {
                        console.log(response);
                    });
                }
                setTimeout(function() {
                    scope.anlyObj.done();
                }, 3000);
            },
            init: function() {
                var that = this;
                $http.get('sampleData/entityList.json').success(function(response) {
                    _.each(response, function(val, key) {
                        if (val.entityId == that.entityId) {
                            that.entityObj = val;
                            that.fetchAnalyse();
                        }
                    });
                }).error(function(response) {
                    console.error(response);
                });
            }
        };
        scope.anlyObj.load();
        /*GEO Stats*/
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
                if (typeof visitorsData[code] != "undefined") el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
            }
        });
    }
]);