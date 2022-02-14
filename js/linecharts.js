var s1 = [["01/01/2017", 199], ["02/01/2017", 100], ["03/01/2017", 299], ["04/01/2017", 400], ["05/01/2017", 150], ["06/01/2017", 500]];
var s2 = [["01/01/2017", 123], ["02/01/2017", 443], ["03/01/2017", 299], ["04/01/2017", 222], ["05/01/2017", 150], ["06/01/2017", 333]];
var s3 = [["01/01/2017", 535], ["02/01/2017", 666], ["03/01/2017", 123], ["04/01/2017", 600], ["05/01/2017", 100], ["06/01/2017", 200]];
var s4 = [["01/01/2017", 150], ["02/01/2017", 100], ["03/01/2017", 299], ["04/01/2017", 400], ["05/01/2017", 150], ["06/01/2017", 400]];

plot1 = $.jqplot("chart1", [s1], {
    animate: true,
    animateReplot: true,
    cursor: {
        show: true,
        zoom: true,
        looseZoom: true,
        showTooltip: false
    },
    axesDefaults: {
        pad: 0,
        showTickMarks:false
    },
    series: [{color: '#85ba2a',}],
    grid: {
	    drawGridLines: true,        
	    gridLineColor: '#cccccc',   
	    background: 'transparent',  
	    borderColor: 'transparent', 
	    borderWidth: 0,           
	    shadow: false,              
	    shadowAngle: 45,            
	    shadowOffset: 1.5,          
	    shadowWidth: 3,             
	    shadowDepth: 3,                                     
	    shadowAlpha: 0.07,          
	    renderer: $.jqplot.CanvasGridRenderer, 
	    rendererOptions: {}  
	},
    axes: {
        xaxis: {
            drawMajorGridlines: true,
            drawMinorGridlines: false,
            drawMajorTickMarks: true,
            rendererOptions: {
                tickInset: 0.5,
                minorTicks: 0
            },
        	renderer:$.jqplot.DateAxisRenderer,
	        tickOptions:{
	        	formatString:'%b',
	        	marginTop: '5px',
	        	fontSize: 12
	        },
	    	tickInterval:'1 month',
	    	labelOptions: {
	    		textColor: '#111111',
	    		fontSize: '10pt'
	    	}
        },
        yaxis: {
            tickOptions: {
                formatString: "$%'d",
                show: false
            },
            rendererOptions: {
                forceTickAt0: true,
            },
        	rendererOptions: {
		        drawBaseline: false
		    },
	    	labelOptions: {
	    		textColor: '#eee'
	    	}
        }
    },
    highlighter: {
        show: true, 
        showLabel: true, 
        tooltipAxes: 'y',
        sizeAdjust: 7.5 , tooltipLocation : 'ne'
    }
});
plot2 = $.jqplot("chart2", [s2], {
    animate: true,
    animateReplot: true,
    cursor: {
        show: true,
        zoom: true,
        looseZoom: true,
        showTooltip: false
    },
    axesDefaults: {
        pad: 0,
        showTickMarks:false
    },
    series: [{color: '#85ba2a',}],
    grid: {
	    drawGridLines: true,        
	    gridLineColor: '#cccccc',   
	    background: 'transparent',  
	    borderColor: 'transparent', 
	    borderWidth: 0,           
	    shadow: false,              
	    shadowAngle: 45,            
	    shadowOffset: 1.5,          
	    shadowWidth: 3,             
	    shadowDepth: 3,                                     
	    shadowAlpha: 0.07,          
	    renderer: $.jqplot.CanvasGridRenderer, 
	    rendererOptions: {}  
	},
    axes: {
        xaxis: {
            drawMajorGridlines: true,
            drawMinorGridlines: false,
            drawMajorTickMarks: true,
            rendererOptions: {
                tickInset: 0.5,
                minorTicks: 0
            },
        	renderer:$.jqplot.DateAxisRenderer,
	        tickOptions:{
	        	formatString:'%b',
	        	marginTop: '5px',
	        	fontSize: 12
	        },
	    	tickInterval:'1 month',
	    	labelOptions: {
	    		textColor: '#111111',
	    		fontSize: '10pt'
	    	}
        },
        yaxis: {
            tickOptions: {
                formatString: "$%'d",
                show: false
            },
            rendererOptions: {
                forceTickAt0: true,
            },
        	rendererOptions: {
		        drawBaseline: false
		    },
	    	labelOptions: {
	    		textColor: '#eee'
	    	}
        }
    },
    highlighter: {
        show: true, 
        showLabel: true, 
        tooltipAxes: 'y',
        sizeAdjust: 7.5 , tooltipLocation : 'ne'
    }
});
plot3 = $.jqplot("chart3", [s3], {
    animate: true,
    animateReplot: true,
    cursor: {
        show: true,
        zoom: true,
        looseZoom: true,
        showTooltip: false
    },
    axesDefaults: {
        pad: 0,
        showTickMarks:false
    },
    series: [{color: '#85ba2a',}],
    grid: {
	    drawGridLines: true,        
	    gridLineColor: '#cccccc',   
	    background: 'transparent',  
	    borderColor: 'transparent', 
	    borderWidth: 0,           
	    shadow: false,              
	    shadowAngle: 45,            
	    shadowOffset: 1.5,          
	    shadowWidth: 3,             
	    shadowDepth: 3,                                     
	    shadowAlpha: 0.07,          
	    renderer: $.jqplot.CanvasGridRenderer, 
	    rendererOptions: {}  
	},
    axes: {
        xaxis: {
            drawMajorGridlines: true,
            drawMinorGridlines: false,
            drawMajorTickMarks: true,
            rendererOptions: {
                tickInset: 0.5,
                minorTicks: 0
            },
        	renderer:$.jqplot.DateAxisRenderer,
	        tickOptions:{
	        	formatString:'%b',
	        	marginTop: '5px',
	        	fontSize: 12
	        },
	    	tickInterval:'1 month',
	    	labelOptions: {
	    		textColor: '#111111',
	    		fontSize: '10pt'
	    	}
        },
        yaxis: {
            tickOptions: {
                formatString: "$%'d",
                show: false
            },
            rendererOptions: {
                forceTickAt0: true,
            },
        	rendererOptions: {
		        drawBaseline: false
		    },
	    	labelOptions: {
	    		textColor: '#eee'
	    	}
        }
    },
    highlighter: {
        show: true, 
        showLabel: true, 
        tooltipAxes: 'y',
        sizeAdjust: 7.5 , tooltipLocation : 'ne'
    }
});
plot4 = $.jqplot("chart4", [s4], {
    animate: true,
    animateReplot: true,
    cursor: {
        show: true,
        zoom: true,
        looseZoom: true,
        showTooltip: false
    },
    axesDefaults: {
        pad: 0,
        showTickMarks:false
    },
    series: [{color: '#85ba2a',}],
    grid: {
	    drawGridLines: true,        
	    gridLineColor: '#cccccc',   
	    background: 'transparent',  
	    borderColor: 'transparent', 
	    borderWidth: 0,           
	    shadow: false,              
	    shadowAngle: 45,            
	    shadowOffset: 1.5,          
	    shadowWidth: 3,             
	    shadowDepth: 3,                                     
	    shadowAlpha: 0.07,          
	    renderer: $.jqplot.CanvasGridRenderer, 
	    rendererOptions: {}  
	},
    axes: {
        xaxis: {
            drawMajorGridlines: true,
            drawMinorGridlines: false,
            drawMajorTickMarks: true,
            rendererOptions: {
                tickInset: 0.5,
                minorTicks: 0
            },
        	renderer:$.jqplot.DateAxisRenderer,
	        tickOptions:{
	        	formatString:'%b',
	        	marginTop: '5px',
	        	fontSize: 12
	        },
	    	tickInterval:'1 month',
	    	labelOptions: {
	    		textColor: '#111111',
	    		fontSize: '10pt'
	    	}
        },
        yaxis: {
            tickOptions: {
                formatString: "$%'d",
                show: false
            },
            rendererOptions: {
                forceTickAt0: true,
            },
        	rendererOptions: {
		        drawBaseline: false
		    },
	    	labelOptions: {
	    		textColor: '#eee'
	    	}
        }
    },
    highlighter: {
        show: true, 
        showLabel: true, 
        tooltipAxes: 'y',
        sizeAdjust: 7.5 , tooltipLocation : 'ne'
    }
});