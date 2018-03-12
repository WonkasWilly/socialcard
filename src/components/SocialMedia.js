import React, {Component} from 'react';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Facebook from './Facebook';
import '../CSS/SocialMedia.css';

class SocialMedia extends Component {
	render() {
		return(
			<div className='social-container'>
				<Twitter />
				<Instagram />
				<Facebook />
				
				
			</div>
		)
	}
}

export default SocialMedia;