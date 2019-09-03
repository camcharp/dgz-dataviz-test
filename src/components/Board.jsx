import React, { Component } from 'react';
import Grid from './Grid';
import Grid2 from './Grid2';
import trajectoires from '../trajectoires.json';

let sortedTrajectories = [];

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trajectoires: [],
			client: null
		};
		this.handleChange = this.handleChange.bind(this);
	}

	sortTrajectoriesByTime = () => {
		trajectoires.forEach((client) => {
			client.points.sort((a, b) => {
				return a.time - b.time;
			});
			sortedTrajectories.push(client);
		});
	};

	componentWillMount() {
		this.sortTrajectoriesByTime();
		this.setState({ trajectoires: sortedTrajectories });
	}

	handleChange(event) {
		this.setState({
			client: this.state.trajectoires.find((client) => client.id === event.target.value)
		});
	}

	render() {
		console.log(this.state.trajectoires);
		console.log(this.state.client);
		const clients = this.state.trajectoires.map((client, index) => {
			return (
				<option name="client" key={index} value={client.id} onChange={this.handleChange}>
					{client.id}
				</option>
			);
		});
		let howManyStops = 0;
		if (this.state.client) {
            howManyStops = this.state.client.points.length - 1;
			console.log(howManyStops);
		}
		return (
			<React.Fragment>
				<h1>Visualiser les clients</h1>
				<label htmlFor="select-client">Choisissez un client par ID:</label>
				<select id="select-client" onChange={this.handleChange}>
					{clients}}
				</select>

				{this.state.client != null ? (
					<div>
						<h2>Selected client: {this.state.client.id}</h2>
						{/* <h3>Durée du parcours: </h3>
						<h3>Vitesse moyenne</h3>
						<h3>Nombre d’arrêts : {{howManyStops}}</h3> */}
					</div>
				) : null}
				<Grid data={this.state.client} />
			</React.Fragment>
		);
	}
}
