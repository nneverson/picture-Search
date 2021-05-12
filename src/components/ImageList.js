import React from 'react';

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return (
			<img key={image.id} src={image.urls.regular} alt={image.description} />
		);
	});
	return <div> {images}</div>;
};

export default ImageList;

//key props need to be added for things that are rendered in a list. It must be add to the root element that will be rendered in the return statement, if I am not adding it to the return statement of the map function.
