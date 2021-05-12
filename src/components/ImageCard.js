import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
		//we are creating a ref (reference) to images in the DOM element. This way we can customize the cards rendered
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
		// line 11 is needed because the client height is 0 when the component first mounts. The value is only known when the object is expanded. So an event listener is added to this.imageRef.current so that when the client height is loaded it will call the method setSpan.
	}
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10);

		this.setState({ spans });
		//line 20 is short for this.setState({spans:spans})
	};

	//I am going to destructure this.props.image so I do not have to keep typing it out becuase I will be referring to it many times.
	render() {
		const { description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}
export default ImageCard;
