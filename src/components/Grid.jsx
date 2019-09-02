import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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
				<XAxis  type="number" dataKey="x" name="x" />
				<YAxis  yAxisId="left" type="number" dataKey="y" name="y" stroke="#8884d8" />
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
				<Scatter yAxisId="left" name="A school" data={this.state.data} fill="#8884d8" />
			</ScatterChart>
		);
	}
}
