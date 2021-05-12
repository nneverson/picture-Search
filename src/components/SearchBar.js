import React, { Component } from 'react';

// class SearchBar extends Component {
// 	onInputChange(event) {
// 		console.log(event.target.value);
// 	}

// 	render() {
// 		return (
// 			<div className='ui segment'>
// 				<form className='ui form'>
// 					<div className='field'>
// 						<label> Image search</label>

// 						<input
// 							type='text'
// 							placeholder='search'
// 							onChange={this.onInputChange}
// 						/>
{
	/* patenthesies aren't added when we pass a call back function to an event handeler. If we add parenthesies onInputchange will be called everytime the component is rendered. We only want to call it in the future when the input changes not when the component is rendered. */
}
{
	/* alternate event handler syntax
							<input type='text' onChange={(event) => console.log(event.target.value) }/>. With this we do not need to create our own method (lines 4-6). An even shorter way is to replace is to replace the word even with the letter e
							<input type='text' onChange={(e) => console.log(e.target.value) }/>*/
}
{
	/* </div>
				</form>
			</div>
		);
	}
} */
}

{
	/* alternate event handler syntax */
}

{
	/* this is a controlled component
	 */
}
class SearchBar extends Component {
	state = { userInput: '' };

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.runOnSubmit(this.state.userInput);

		// what is happening on line 50 is the props from the parent component(App). We are calling the function onSearcSubmit which was passed to this via props. Invoke the function with (this.state.term)
	};

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.handleSubmit} className='ui form'>
					<div className='field'>
						<label> Image search</label>

						<input
							type='text'
							placeholder='search'
							value={this.state.userInput}
							onChange={(e) => this.setState({ userInput: e.target.value })}
						/>
						{/*adding this.state.userInput updates the value to be whatever the user types. For example this will replace what is assigned as the placeholder text. */}

						{/* patenthesies aren't added when we pass a call back function to an event handeler. If we add parenthesies onInputchange will be called everytime the component is rendered. We only want to call it in the future when the input changes not when the component is rendered. */}
						{/* alternate event handler syntax
							<input type='text' onChange={(event) => console.log(event.target.value) }/>. With this we do not need to create our own method (lines 4-6). An even shorter way is to replace the word event with the letter e
							<input type='text' onChange={(e) => console.log(e.target.value) }/>*/}
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
