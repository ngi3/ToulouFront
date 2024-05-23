
import React from 'react'
import Highcharts, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Btn from '../Btn/Btn'
import pie from '../Assets/pie_chart_fill.svg'
import column from '../Assets/Colum_up_fill.svg'
import line from '../Assets/Line_up.svg'

function DashboardCiterne() {

   const options = {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
            from: 0.3,
            to: 1.5,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: ''
                }
            }
        }, { // Light breeze
            from: 1.5,
            to: 3.3,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: ''
                }
            }
        }, { // Gentle breeze
            from: 3.3,
            to: 5.5,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Moderate breeze
            from: 5.5,
            to: 8,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh breeze
            from: 8,
            to: 11,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong breeze
            from: 11,
            to: 14,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Near Gale
            from: 14,
            to: 17,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh Gale
            from: 17,
            to: 20.5,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong Gale
            from: 20.5,
            to: 24,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2020, 3, 15, 0, 0, 0)
        }
    },
    series: [{
        name: 'Hestavollane',
        data: [
            5.4, 5.2, 5.7, 6.3, 5.2, 5.6, 6.1,
            5.6, 5.9, 7.1, 8.6, 7.8, 8.6,
            8.0, 9.7, 11.2, 12.5, 13.1, 10.6,
            10.9, 8.9, 9.5, 7.5, 3.5, 4.2
        ],
        color : '#ED8B3B'

    }, {
        name: 'Vik',
        data: [
            0.2, 0.1, 0.1, 0.5, 0.3, 0.2, 0.1,
            0.1, 0.1, 0.1, 0.2, 1.1, 1.3,
            2.0, 1.5, 1.5, 1.5, 1.4, 1.7,
            2.0, 2.9, 2.1, 2.1, 3.5, 2.9
        ],
        color : '#ECE9F1'
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
    }
  return (
    <div className=' w-[800px]'>
        <div className=' shadow h-[500px] border-t-4 border-orange-400 rounded-2xl px-6'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='mx-2' src={line} alt="" />
                    <img className='mx-2' src={column} alt="" />
                    <img className='mx-2' src={pie} alt="" />
                </div>
                <h3 className='h-6 mt-6 px-9 border-b-2 border-[#6D3100]'>Consommation</h3>
                <p className=' ml-6 mt-6'>Citerne 1</p>
                <Btn text={'Exporter'} backgroundColor='#ED8B3B' color='fff'/>

            </div>
        <HighchartsReact highcharts ={Highcharts} options = {options} />
        </div>
           
    </div>
  )
}

export default DashboardCiterne