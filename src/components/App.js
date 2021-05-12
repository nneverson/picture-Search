import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

import React, { Component } from 'react';

export default class App extends Component {
	state = { images: [] };
	//line 9 binds the call back function to the this property
	onSearchSubmit = async (userInput) => {
		// console.log(userInput);
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: userInput },
			headers: {
				Authorization: 'Client-ID b-6-zcVfOYnhYrNAGXcCcwsBI3XFw4i__r-PAhOMjlM',
			},
		});
		// console.log(response.data.results);
		this.setState({ images: response.data.results });
	};
	//async/ await is an alternative to using the promise based syntax (.then)
	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar runOnSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
