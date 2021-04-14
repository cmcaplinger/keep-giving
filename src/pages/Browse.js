import React from 'react';
// import { Link } from 'react-router-dom';

export default function Browse() {
	return (
		<div className="BrowsePage">
			<div class='row'>
				<div class='column'>
					<div class="content" id="org-card">
					<a href="https://ibb.co/7pcY4yJ"><img src="https://i.ibb.co/kDnH1cg/ARC.png" id="org-img" alt="ARC" border="0"/></a>
						<h2>Angel Rose Artist Collective</h2>
						<h4>Arts & Culture | Washington, DC </h4>
							<p>A multilingual Two-Spirit Native American Transgender, Intersex, Asexual, Queer+ led Collective of artists, healers, educators, and advocates, uplifting Two-Spirit Nation and BIPOC Communities through art & land justice.</p>
							<p>Budget: $30,750</p> 
							<a href="https://cmc-keep-giving-backend.herokuapp.com/"><button class="button button--anthe"><span>add</span></button></a> 
					</div>
				</div>
				<div class='column'>
					<div class="content" id="org-card">
						<a href="https://ibb.co/dmpp8dG"><img src="https://i.ibb.co/Y0ddHzp/AOB.png" id="org-img" alt="AOB" border="0"/></a>
						<h2>An Open Book</h2>
						<h4>Education | Washington, DC </h4>
							<p>An Open Book's programs offer students in qualifying schools the opportunity to connect with authors, illustrators and their books. Students receive their own signed copy of the featured book to add to their home libraries.</p>
							<p>Budget: $325,600</p> 
						<button class="button button--anthe"><span>add</span></button> 
						</div>
					</div>
				<div class='column'>
					<div class="content" id="org-card">
						<a href="https://ibb.co/9vsspyZ"><img src="https://i.ibb.co/xsJJ2zF/1-c-FE-f6-Yb-Rdc-I5-ZD0e-FLttw.jpg" id="org-img" alt="1-c-FE-f6-Yb-Rdc-I5-ZD0e-FLttw" border="0"/></a>
						<h2>No Justice No Pride</h2>
						<h4>LGBTQIA+ | Washington, DC </h4>
							<p>We exist to end the LGBT movement’s complicity with systems of oppression that further marginalize queer and trans individuals. Together we recognize that there can be no pride for some of us without liberation for all of us.</p>
							<p>Budget: $510,800</p> 
						<button class="button button--anthe"><span>add</span></button>
					</div>		
				</div>
			</div>
			<div class='row'>
				<div class='column'>
					<div class="content" id="org-card">
						<a href="https://ibb.co/FVgff4S"><img src="https://i.ibb.co/Dp566fx/culturaldc-barbershopinstall-37-1.jpg" alt="culturaldc-barbershopinstall-37-1" id="org-img" border="0"/></a>
						<h2>CulturalDC</h2>
						<h4>Arts & Culture | Washington, DC</h4>
							<p>CulturalDC supports innovative artists across all disciplines and makes their work accessible to diverse audiences. We provide unconventional space for relevant and challenging work that is essential to nurturing vibrant urban communities.</p>
							<p>Budget: $750,350</p> 
						<button class="button button--anthe"><span>add</span></button>
						</div>
					</div>
					<div class='column'>
					<div class="content" id="org-card">
					<a href="https://ibb.co/p2Fr8Gq"><img src="https://i.ibb.co/NxBnPQR/MAM.png" id="org-img" alt="MAM" border="0"/></a>
						<h2>Mutual Aid Movement</h2>
						<h4>Community | Washington, DC </h4>
							<p>MAM DC is composed of grassroots volunteers and front-line service providers working to support neighbors in need. We are a respectful, solution oriented, and hopeful group that emphasizes the collective over the individual.</p>
							<p>Budget: $150,400</p> 
						<button class="button button--anthe"><span>add</span></button> 
					</div>
				</div>
				<div class='column'>
					<div class="content" id="org-card">
					<a href="https://ibb.co/d4RxhTL"><img src="https://i.ibb.co/xqNd4kf/SHUTDOWN.png" id="org-img" alt="SHUTDOWN" border="0"/></a>
						<h2>ShutDownDC</h2>
						<h4>Political Action | Washington, DC </h4>
							<p>ShutDownDC uses strategic direct action to advance justice and hold officials accountable. We’re a growing movement and we’re getting ready to show up for each other this week, to preserve the pillars of democracy and fight for a better future.</p>
							<p>Budget: $225,800</p> 
						<button class="button button--anthe"><span>add</span></button> 
					</div>
				</div>
			</div>
		</div>
	);
}