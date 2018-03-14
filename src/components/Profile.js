import React from 'react';
import '../CSS/Profile.css';


class Profile extends React.Component {
	render() {
		return(
			<div className="profile-container">
				<img src="https://picsum.photos/500/283/?random" alt="Profile" className="profile-picture"/>
			</div>
		)
	}
}

export default Profile;