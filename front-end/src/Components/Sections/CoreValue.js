import React from 'react';

// Components
import CoreCard from '../Cards/CoreCard';
const CoreValue = () => {
	const CoreValuesData = [
		{
			icon: 'fas fa-chart-line',
			title: 'Growth and nurturing',
			text:
				'Encouraging education as a fundamental activity of engineers, scientists, and technologists at all levels and at all times; ensuring a pipeline of students to preserve the profession.',
		},
		{
			color: 'yellow',
			icon: 'fa fa-users',
			title: 'Community Creation',
			text:
				'We are here to create a community; a community that supports, follows technology. We are here to present to the community the beauty of technology and guide them to the ways they can get involved with such a technology through our activities.',
		},
		{
			icon: 'fa fa-laptop',
			title: 'To be impressive',
			text:
				'Our branch is an influential one established in Dec. 2014, only one year after the university was founded. With such a dedication and passion, IEEE ZC started with passionate and hard-working volunteers.',
		},
		{
			icon: 'fa fa-user-plus',
			title: 'Integrity in action',
			text:
				'Fostering a professional climate in which engineers and scientists continue to be respected for their exemplary ethical behavior and volunteerism.',
		},
		{
			color: 'yellow',
			icon: 'fa fa-handshake',
			title: 'Partnership',
			text:
				'Promoting a culture of respect for the employee and volunteer, valuing contributions at all levels of the organization, investing in training and development to enhance capabilities, empowering individuals to make a positive difference, and building a membership organization based on a strong volunteer-staff partnership to serve the profession.',
		},
		{
			icon: 'fa fa-cogs',
			title: 'Trust',
			text:
				'Being a trusted and unbiased source of technical information, and forums, for technical dialog and collaboration.',
		},
	];

	return (
		<>
			<div style={{ height: '60px' }}></div>
			<div id='core-values' style={{ backgroundColor: '#F3F3F5' }}>
				<div style={{ height: '60px' }}></div>
				<h1
					className='display-1 mt-5 mb-5 text-center wow fadeInUp'
					data-wow-delay='0.2s'
				>
					Core Values
				</h1>
				<div className='container'>
					<div className='row'>
						{CoreValuesData.map((el) => {
							return <CoreCard key={el.title} CoreCardProps={el} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default CoreValue;
