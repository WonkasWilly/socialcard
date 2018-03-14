import React from 'react';
import '../CSS/GenerateUser.css';


function GenerateUser(props) {
	const { profilePics } = props;

	return(
		<div className="button-container">
			<button id='generate-user' className='btn btn-primary' onClick={() => {props.generateUser(profilePics)}}>
				Generate User
			</button>
		</div>
	)

}

export default GenerateUser;