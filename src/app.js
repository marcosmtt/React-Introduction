import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
	handleTitleClick() {
		alert('you clicked the title');
	}
	render() {
		return (
			<div>
				<h1>Adopt Me!</h1>
				<Pet name="Minato" animal="cat" color="Orange" />
				<Pet name="Minerva" animal="cat" color="Brown" />
				<Pet name="Goku" animal="cat" color="Black and White" />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
