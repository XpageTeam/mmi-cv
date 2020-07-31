import $ from "jquery";
import "chart.js/dist/Chart.bundle";

window.jQuery = $
window.$ = $
window.Chart = Chart;
// window.is = is

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});

	// const chartsCanvas = document.querySelector("#charts");

	// var densityData = {	
	// 	data: [47.1,34.05],
	// 	backgroundColor: '#107410' 
	// };

	// var chartOptions = {
	// 	legend: {
	// 		display: false,
		
	// 	labels: {
	// 			boxWidth: 10,
	// 			fontColor: 'rgb(255, 10, 10)'
	// 		}	  
	// 	},
	// 	scales: {
	// 				yAxes: [{
	// 					ticks: {
	// 						beginAtZero:true,
	// 										scaleStartValue:0
	// 						}
	// 						}],
	// 						xAxes: [{
	// 						barThickness : 60
	// 						}]
	// 		}
	
	// };

	// console.log(Chart);
	
	
	// var barChart = new Chart(chartsCanvas, {
	// 	type: 'bar',
	// 	data: {
	// 		labels: ['Магазин 1','Магазин 2'],
	// 		datasets: [densityData]
	// 	},
	// 	options: chartOptions
	// });



	$(".user-toggle-menu .menu-item__tab").click(function(){
		var $this = $(this);
	
	
	
		
	
		$this.toggleClass("active")
	
		$this.next('.menu-item__content').slideToggle();
		swiperSliderInit();
	  });


});