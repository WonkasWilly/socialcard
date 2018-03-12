import React from 'react';
import SocialMedia from './SocialMedia';

import '../CSS/Image.css';


class Image extends React.Component {
	render() {
		return(
			<div className="image-container">
				<img src="../../images/Space.jpg" alt="Space"/>
				<SocialMedia />
			</div>
		)
	}
}

export default Image;