import React from 'react';
import './imagelist.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className='image-list'> {images}</div>;
};

export default ImageList;

//key props need to be added for things that are rendered in a list. It must be add to the root element that will be rendered in the return statement, if I am not adding it to the return statement of the map function.
