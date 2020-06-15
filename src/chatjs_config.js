// import 'chartjs-plugin-zoom'

function chartjsConfig(ChartJsProvider) {

    ChartJsProvider.setOptions({
        chartColors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        responsive: true,
        legend: {
            display: false,
            position: 'top',
            textDirection: 'top'
        },
        labels: {
            display: false,
        },
        scaleShowLabels: false,
        borderWidth: 15
    })
    // Configure all line charts
    ChartJsProvider.setOptions('bar', {
        gridLines: {
            display: false
        },
        responsive: true,
        //   legend: {
        //     display: true,
        //     position: 'bottom',
        //     align: true,
        //     fullWidth: true
        // },
        scales: {
            xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    scaleLabel: {
                        display: false
                    }

                },

            ],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                scaleLabel: {
                    display: false
                },
                ticks: {
                    display: false,
                    drawBorder: false,
                    beginAtZero: true,


                }
            }],
        },
    })

    ChartJsProvider.setOptions('bubble', {
        chartColors: ['#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        gridLines: {
            display: false
        },
        legend: {
            display: true,
            position: 'bottom',
            align: true,
            fullWidth: true
        },
        scales: {
            xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    scaleLabel: {
                        display: false
                    }

                },
            ],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                scaleLabel: {
                    display: false
                },
                ticks: {
                    display: false,
                    drawBorder: false,
                    beginAtZero: false,
                }
            }],
        },
    })

    ChartJsProvider.setOptions('doughnut', {
        chartColors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        responsive: false,
        legend: {
            display: true,
            position: 'top'
        },
        labels: {
            display: true
        },
        scaleShowLabels: false,
        borderWidth: 15
    })

    ChartJsProvider.setOptions('pie', {
        gridLines: {
            display: false
        },
        chartColors: ['#803690', '#00ADF9', '#46BFBD', '#FDB45C', ' #41395C', '#4D5360'],
        responsive: true,
        
        legend: {
            display: true,
            position: 'top',
            align: 'start',
            textDirection: 'top',
            rtl: true,
            
        },
        labels: {
            display: false,
        },
        scaleShowLabels: false,
        borderWidth: 15,
        // options: {
        //     layout: {
        //         padding: {
        //             left: 50,
        //             right: 0,
        //             top: 0,
        //             bottom: 0
        //         }
        //     }
        // }
    })

    ChartJsProvider.setOptions('horizontalBar', {
        gridLines: {
            display: false
        },
        responsive: true,
          legend: {
            display: false,
            position: 'bottom',
            align: true,
            fullWidth: true
        },
        data: {
            labels: ["82", " 81 ", "2", " 42", "4"],
            datasets: [
              {
                data: [727, 589, 537, 543, 20],
                backgroundColor: "#5f8a58",
                hoverBackgroundColor: "rgba(50,90,100,1)"
              },
              {
                data: [238, 553, 746, 884, 122],
                backgroundColor: "#3f7faa",
                hoverBackgroundColor: "rgba(140,85,100,1)"
              }
            ]
          },
        scales: {
            xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        beginAtZero:true,
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize:11
                    },
                    scaleLabel: {
                        display: false
                    },
                    stacked: true
                },
            ],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                    beginAtZero: true,

                },
                scaleLabel: {
                    display: false
                },
                ticks: {
                    display: false,
                    drawBorder: false,
                    beginAtZero: true,


                }
            }],
        },
    })

}

export default chartjsConfig