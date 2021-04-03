import React from 'react';

export default function Home() {
	
	return (
		<div className="HomePage">
			<div class="content">
				<div class="register">
				<h2>register</h2>
				<form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }} class="register">
					<label> Email: </label> &nbsp;
					<input type="text"/> &nbsp; &nbsp; &nbsp;
					<label> Password: </label> &nbsp;
					<input type="text"/> &nbsp; &nbsp; &nbsp;
					<input type="submit" id="SubmitButton"/>
				</form>		
				</div>
			</div>
		</div>
	);
}