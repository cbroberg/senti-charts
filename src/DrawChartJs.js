import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class ChartJs extends Component {
    constructor(props) {
        super(props);

        this.dataObject1 = {
            labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
            datasets: [{
                label: "Data object 1",
                backgroundColor: '#f00',
                borderColor: '#f00',
                //data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
                data: {
                    labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
                    datasets: [
                        {
                            label: "pv",
                            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        },
                        {
                            label: "uv",
                            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1
                        }
                    ]
                }
            }],
        };

        this.state = { activeDataObject: this.dataObject1 };
    }
    render() {
        return (
            <Bar
                width={500}
                height={500}
                options={{
                    maintainAspectRatio: false,
                    responsive: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{

                        }]
                    }
                }}
                data={this.state.activeDataObject}/>
        ) 
    }
}