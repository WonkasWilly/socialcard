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
		defaultkey: "value", 
			console.log("Hey...none of the brand names matched.")

	}

	return(
		<div className={brand + "-logo"} onClick={launchSocialMedia}>
				<svg width="0" height="0">
				  <radialGradient id="rg" r="150%" cx="30%" cy="107%">
				    <stop stop-color="#fdf497" offset="0" />
				    <stop stop-color="#fdf497" offset="0.05" />
				    <stop stop-color="#fd5949" offset="0.45" />
				    <stop stop-color="#d6249f" offset="0.6" />
				    <stop stop-color="#285AEB" offset="0.9" />
				  </radialGradient>
				</svg>
		{currentIcon}
		</div>
	)
}

export default SocialMedia;