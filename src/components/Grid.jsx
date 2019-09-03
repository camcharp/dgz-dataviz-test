import React, { PureComponent } from 'react';
import { LineChart, Line, Brush,Legend, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class Grid extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			client: {
				id: null,
				points: null
			},
			data: []
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ client: nextProps.data });
	}

	componentDidUpdate() {
		this.setState({ data: this.state.client.points });
	}

	render() {
		console.log(this.props);
        console.log(this.state.data);
       
		return (
			<ScatterChart
				width={500}
				height={400}
				margin={{
					top: 20,
					right: 20,
					bottom: 20,
					left: 20
				}}
			>
				<CartesianGrid />
				<XAxis type="number" tickCount={10} interval={0} dataKey="x" name="x" domain={[0, 10]} />
				<YAxis yAxisId="left" tickCount={10} interval={0} type="number" dataKey="y" name="y" stroke="#8884d8" domain={[0, 10]} />
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
				<LineChart width={400} height={400} data={this.state.data}>
					<Line type="monotone" dataKey={this.state.data} stroke="#8884d8" />
				</LineChart>
				<Scatter yAxisId="left" name="position" data={this.state.data} fill="#8884d8" line lineType="joint" shape="dot" />

			</ScatterChart>
		);
	}
}
