import React from 'react';
import '../CSS/SocialMedia.css';

function SocialMedia(props) {

	function launchSocialMedia() {
		let currentLink;

		switch(brand) {
		case 'facebook':
			currentLink = "https://www.facebook.com/";
			break;
		case 'twitter':
			currentLink = "https://twitter.com";
			break;
		case 'instagram':
			currentLink = "https://www.instagram.com/";
			break;
		default:
			console.log("Hey...none of the brand names matched.")
		}

		window.open(currentLink);
	}

	const { brand } = props;
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
		<div className={brand + "-logo"} onClick={launchSocialMedia}>{currentIcon}</div>
	)
}

export default SocialMedia;