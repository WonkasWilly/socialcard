import React from 'react';
import '../CSS/Image.css';

class Image extends React.Component {
	render() {
		return(
			<div className="image-container">
				<img src="../../images/Space.jpg" alt="Space"/>
			</div>
		)
	}
}

export default Image;