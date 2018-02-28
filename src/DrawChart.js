import React, { Component } from 'react'
import {
    XAxis, YAxis, CartesianGrid, Bar, BarChart, Tooltip,
    ResponsiveContainer, Legend, Cell
} from 'recharts';

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pv: true,
            uv: false,
            amt: false,
            chartClicked: false,
        }
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
        this.handleChartClick = this.handleChartClick.bind(this);
    }

    handleCheckBoxClick(event) {
        this.setState({
            [event.currentTarget.value]: event.target.checked
        })
    }

    handleChartClick() {
        this.setState({
            chartClicked: !this.state.chartClicked,
        })
    }

    YearChart = (props) => {
        return (
            <BarChart width={700} height={300} data={props.dataYears}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#CE6629" onClick={this.handleChartClick}>
                    {
                        props.dataYears.map((entry, index) => (
                            <Cell fill='#8884d8' key={`cell-${index}`} />
                        ))
                    }
                </Bar>
            </BarChart>
        )
    }

    MonthChart = (props) => {
        const { pv, uv, amt } = this.state;
        return (
            <div>
                <button onClick={this.handleChartClick}>Go back</button>
                <div>
                    <input type="checkbox" id="pv" name="checkbox" value="pv" defaultChecked={this.state.pv} onClick={this.handleCheckBoxClick} />
                    <label forhtml="pv">Pv</label>
                </div>
                <div>
                    <input type="checkbox" id="uv" name="chekbox" value="uv" defaultChecked={this.state.uv} onClick={this.handleCheckBoxClick} />
                    <label forhtml="uv">Uv</label>
                </div>
                <div>
                    <input type="checkbox" id="amt" name="chekbox" value="amt" defaultChecked={this.state.amt} onClick={this.handleCheckBoxClick} />
                    <label forhtml="amt">Amt</label>
                </div>
                <BarChart width={900} height={300} data={props.dataMonths}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {pv ? <Bar dataKey="pv" fill="#CE6629">
                        {
                            props.dataMonths.map((entry, index) => (
                                <Cell fill='#8884d8' key={`cell-${index}`} />
                            ))
                        }
                    </Bar> : ''}

                    {uv ? <Bar dataKey="uv" fill="#1DA493" /> : ''}
                    {amt ? <Bar dataKey="amt" fill="#CEB42B" /> : ''}
                </BarChart>
            </div>)
    }

    render() {
        const dataMonths = [
            { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
            { name: 'August', uv: 2490, pv: 4000, amt: 100 },
            { name: 'September', uv: 7490, pv: 6300, amt: 9100 },
            { name: 'October', uv: 6400, pv: 9800, amt: 4150 },
            { name: 'November', uv: 9900, pv: 5450, amt: 6100 },
            { name: 'December', uv: 4785, pv: 4900, amt: 7500 },
        ];

        const dataYears = [
            { Year: '2015', total: 26155 },
            { Year: '2016', total: 35698 },
            { Year: '2017', total: 94851 },
            { Year: '2018', total: 156881 },

        ];

        const { chartClicked } = this.state;

        return (
            <div>            
                {!chartClicked ? <this.YearChart dataYears={dataYears}/> : <this.MonthChart dataMonths={dataMonths}/>}
            </div>

        )
    }
}