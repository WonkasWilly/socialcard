import React, {Component} from 'react';
import '../CSS/SocialMedia.css';


class SocialMedia extends Component {
	constructor(props) {
		super();
	}

	render() {
		const { brand } = this.props;
		let currentIcon;
		switch(brand) {
			case 'facebook':
				currentIcon = <i className="fab fa-facebook-square fa-2x"></i>
				break;
			case 'twitter':
				currentIcon = <i className="fab fa-twitter-square fa-2x"></i>
				break;
			case 'instagram':
				currentIcon = <i className="fab fa-instagram fa-2x"></i>
				break;
			default:
				console.log("Hey...none of the brand names matched.")

		}

		return(
			<div className={brand + "-logo"}>{currentIcon}</div>
		)
	}
}

export default SocialMedia;