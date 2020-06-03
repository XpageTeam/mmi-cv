import domReady from './xpage/ready';

let chartsCanvas: HTMLCanvasElement;

domReady(() => {
	chartsCanvas = document.querySelector("#charts");
});

window.makeCharts = (minutes: Array<number>) => {
	var densityData = {	
		data: minutes,
		backgroundColor: '#5F9AE3' 
	};

	var chartOptions = {
		legend: {
			display: false,
			labels: {
				boxWidth: 5,
				fontColor: 'rgb(95, 154, 227)',
				text: "12312"
			}
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					scaleStartValue:0,
					suggestedMax: 60
				}
			}],
			xAxes: [{
				barThickness : 10
			}]
		},
		responsive: true
	};



	return new window.Chart(chartsCanvas, {
		type: 'bar',
		data: {
			labels: [
				'09:00 - 10:00',
				'10:00 - 11:00',
				'11:00 - 12:00',
				'12:00 - 13:00',
				'13:00 - 14:00',
				'14:00 - 15:00',
				'15:00 - 16:00',
				'16:00 - 17:00',
				'17:00 - 18:00',
				'18:00 - 19:00',
				'19:00 - 20:00'
			],
			datasets: [densityData]
		},
		options: chartOptions,
	});
}