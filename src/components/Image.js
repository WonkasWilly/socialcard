import React from 'react';
import SocialMedia from './SocialMedia';

import '../CSS/Image.css';


class Image extends React.Component {
	render() {
		return(
			<div className="image-container">
				<img src="https://picsum.photos/500/283/?random" alt="Space"/>
				<div className="socialmedia-container">
					<SocialMedia brand='instagram' />
					<SocialMedia brand='twitter' />
					<SocialMedia brand='facebook' />
				</div>		
			</div>
		)
	}
}

export default Image;