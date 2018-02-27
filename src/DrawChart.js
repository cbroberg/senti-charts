import React, { Component } from 'react'
import {
    XAxis, YAxis, CartesianGrid, Bar, BarChart, Tooltip,
    ResponsiveContainer, Legend, Cell
} from 'recharts';

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data, index) {
        this.setState({
            activeIndex: index,
        });
    }

    handleLegendClick(event) {
        this.setState({
            activeIndex: event.currentTarget.dataset.id
        })
    }

    render() {
        const data = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ];
        const { activeIndex } = this.state;
        const activeItem = data[activeIndex];

        const renderLegend = (props) => {
            return (
                <ul>
                    {
                        props.payload.map((entry, index) => (
                            <li cursor="pointer" key={`item-${index}`} fill={index === activeIndex ? '#ff0000' : '#8884d8'} data-id={index} onClick={this.handleLegendClick.bind(this)}>{entry.name}</li>
                        ))
                    }
                </ul>
            );
        }
        console.log(activeIndex)

        return (
            <div>
            <BarChart width={700} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend 
                    payload={data}
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    content={renderLegend}
                >
                </Legend>
                <Bar dataKey="pv" fill="#CE6629" onClick={this.handleClick}>
                {
                    data.map((entry, index) => (
                            <Cell cursor="pointer" fill={index === activeIndex ? '#ff0000' : '#8884d8'} key={`cell-${index}`} />
                    ))
                }
                </Bar>
                <Bar dataKey="uv" fill="#1DA493" />
                <Bar dataKey="amt" fill="#CEB42B" />
            </BarChart>
            <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
            </div>
        )
    }
}