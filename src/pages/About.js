import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
	
	return (
		<div className="AboutPage">
			<div class='row'>
    			<div class='column'>
					<div class="content">
						<h2>what</h2>
						<p>Keep Giving is a donation management system that empowers users to contribute on a regular basis to mutual aid, non-profits, individuals and important social causes.</p> 
						<p>Select who you want to give to, how often, how much - and chart your impact in different giving areas. One-off donations are okay, but long-term investment is a better way to support our communities and local justice-oriented groups.</p>
						<p>Users are strongly encouraged to pair monetary contributions with physical actions. When you commit to an organization, you'll be prompted with opportunities to connect.</p>
						<h2>who</h2>
						<p>This project was developed by CM Caplinger (they/them). Caplinger has worked in non-profit fundraising for over 7 years, and has experienced first-hand the toll that development administration can take on an individual.</p>
						<a class="github-button" href="https://github.com/cmcaplinger" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @cmcaplinger on GitHub">Follow @cmcaplinger</a>
						</div>
				</div>
			</div>
		</div>
	);
}