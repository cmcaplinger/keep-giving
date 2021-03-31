import React from 'react';

export default function Home() {
	
	return (
		<div className="HomePage">
			<div class="content">
				<div class="register">
				<h2>register</h2>
				<form style={{ display: 'flex', flexDirection: 'row' }} class="register">
					Email:
					<input type="text"/>
					Password:
					<input type="text"/>
					<input type="submit" id="SubmitButton"/>
				</form>
				</div>
			</div>
		</div>
	);
}