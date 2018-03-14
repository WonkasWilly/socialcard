import React from 'react';
import '../CSS/Profile.css';


function Profile (props) {
	function launchSocialMedia() {
		alert('hey.')
	}

	return(
		<div className="profile-container" onClick={launchSocialMedia}>
			<img src={props.currentPhoto} alt="Profile" className="profile-picture"/>
		</div>
	)
}
export default Profile;