import React, { Component } from 'react'
import {
    XAxis, YAxis, CartesianGrid, Bar, BarChart, Tooltip,
    Area, Legend, Cell
} from 'recharts';

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pv: true,
            uv: false,
            amt: false,
            chartClicked: false,
            monthChartClicked: false,
        }
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
        this.handleChartClick = this.handleChartClick.bind(this);
        this.handleMonthClick = this.handleMonthClick.bind(this);
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

    handleMonthClick() {
        this.setState({
            monthChartClicked: !this.state.monthChartClicked,
        })
    }

    YearChart = (props) => {
        return (
            <BarChart width={700} height={300} data={props.dataYears}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="Year" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip cursor={false} />
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
                    <label>Pv</label>
                </div>
                <div>
                    <input type="checkbox" id="uv" name="chekbox" value="uv" defaultChecked={this.state.uv} onClick={this.handleCheckBoxClick} />
                    <label>Uv</label>
                </div>
                <div>
                    <input type="checkbox" id="amt" name="chekbox" value="amt" defaultChecked={this.state.amt} onClick={this.handleCheckBoxClick} />
                    <label>Amt</label>
                </div>
                <BarChart width={900} height={300} data={props.dataMonths}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="white"/>
                    <YAxis stroke="white"/>
                    <Tooltip cursor={false}/>
                    {pv ? <Bar dataKey="pv" fill="#CE6629" onClick={this.handleMonthClick}>
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

    DayChart = (props) => {
        return (
            <BarChart width={700} height={300} data={props.dataDays}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="Day" stroke="white"/>
                <YAxis stroke="white"/>
                <Tooltip cursor={false}/>
                <Bar dataKey="value" fill="#CE6629" onClick={this.handleMonthClick}>
                    {
                        props.dataDays.map((entry, index) => (
                            <Cell fill='#8884d8' key={`cell-${index}`} />
                        ))
                    }
                </Bar>
            </BarChart>
        )
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

        const dataDays = [
            { Day: '1', value: 20},
            { Day: '2', value: 40 },
            { Day: '3', value: 23 },
            { Day: '4', value: 16 },
            { Day: '5', value: 29 },
            { Day: '6', value: 14 },
            { Day: '7', value: 17 },
            { Day: '8', value: 11 },
            { Day: '9', value: 13 },
            { Day: '10', value: 9 },
            { Day: '11', value: 7},
            { Day: '12', value: 18 },
            { Day: '13', value: 36 },
            { Day: '14', value: 33 },
            { Day: '15', value: 2 },
            { Day: '16', value: 17 },
            { Day: '17', value: 39 },
            { Day: '18', value: 40 },
            { Day: '19', value: 42 },
            { Day: '20', value: 16 },
            { Day: '21', value: 33 },
            { Day: '22', value: 23 },
            { Day: '23', value: 10 },
            { Day: '24', value: 20 },
            { Day: '25', value: 17 },
            { Day: '26', value: 27 },
            { Day: '27', value: 29 },
            { Day: '28', value: 36 },
            { Day: '29', value: 37 },
            { Day: '30', value: 28 },
            { Day: '31', value: 43 },

        ]

        const { chartClicked, monthChartClicked } = this.state;

        return (
            <div id="container" style={{'backgroundColor':'#171336', 'fontColor': 'white'}}>            
                {!chartClicked ? <this.YearChart dataYears={dataYears} /> : !monthChartClicked ? <this.MonthChart dataMonths={dataMonths} /> : <this.DayChart dataDays={dataDays}/> }
            </div>

        )
    }
}