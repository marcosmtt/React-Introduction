import React from 'react';
import { render } from 'react-dom';
import pf from 'petfinder-client';
import Pet from './Pet';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pets: []
		}


	}

	componentDidMount() {
		const promise = petfinder.breed.list({
			animal: 'Dog'
		});

		promise.then(res => console.log("breed list ", res));
	}

	render() {
		return (
			<div>
				<h1>Adopt Me!</h1>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
