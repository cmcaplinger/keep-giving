import React from 'react';
import { Link } from 'react-router-dom';

export default function Browse() {
	
	return (
		<div className="BrowsePage">
			<div class='row'>
    			<div class='column'>
					<div class="content">
						<a href="https://ibb.co/H7X7QbG"><img src="https://i.ibb.co/nrRrSYQ/starter.png" alt="starter" id="icon" border="0"/></a>
						<h2>about</h2>
						<p>Keep Giving is a donation management system that empowers users to contribute on a regular basis to mutual aid, non-profits, individuals and important social causes.</p> 
						<p>Select who you want to give to, how often, how much - and chart your impact in different giving areas. One-off donations are okay, but long-term investment is a better way to support our communities and local justice-oriented groups.</p>
						<Link to="/about"><button class="button button--anthe"><span>learn more</span></button></Link>
						</div>
				</div>
				<div class='column'>
					<div class="content">
						<a href="https://ibb.co/hXVPXc6"><img src="https://i.ibb.co/gvJ5vd2/professional.png" alt="professional" id="icon" border="0"/></a>
						<h2>partners</h2>
						<p>We work exclusively with organizations led by people of color, LGBTQIA+, differently-abled people, women, and other folks at the intersection of historically oppressed identities.</p> 
						<p>Organizations must not be a branch of a national company or have an operating budget of more than $500,000. This tool aims to free up time for fundraising staff and create reliable streams of income.</p>
						<Link to="/browse"><button class="button button--anthe"><span>browse partners</span></button></Link>
						</div>
				</div>
				<div class='column'>
					<div class="content">
						<a href="https://ibb.co/z5Fv7F7"><img src="https://i.ibb.co/H2C8xCx/K-G-L-3.png" alt="K-G-L-3" id="icon" border="0"/></a>
						<h2>register</h2>
						<p>Join the growing community and commit to your local causes today. We've raised over $100,000 to date. How much will you keep giving?</p>
						<form style={{ display: 'flex', flexDirection: 'column'}} class="register"> <br/>
						<div>
          					<label htmlFor="name">Full Name: </label>
          					<input type="text" name="name"/>
       				 	</div> &nbsp;
						<div>
          					<label htmlFor="email">Your Email: </label>
          					<input type="text" name="email"/>
       				 	</div> &nbsp;
					<div>
						<label htmlFor="password">Password: </label>
						<input type="text" name="password"/>
					</div>
					<br/>
						</form>
						<a href="https://cmc-keep-giving-backend.herokuapp.com/"><button class="button button--anthe"><span>sign up</span></button></a>
						</div>
				</div>
			</div>
		</div>
	);
}