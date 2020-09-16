import React from 'react';

// Components
import AchCard from '../../Cards/AchievCard';

const EventsData = [
	{
		title: 'Pioneera',
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273324/event2_ytvkgl.jpg',
		text:
			'WIE held that event to get women capable of facing real-world challenges in Entrepreneurship, and to avoid other’s mistakes in freelancing. It was full of experiences from well-known figures.',
	},
	{
		title: 'المش مهندسة لية؟',
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273320/event1_dswzoz.jpg',
		text:
			'It was important for us to break the rule “STEM fields aren’t for women”.  So we decided to prove to the world how it’s possible,  by showing successful Egyptian figures to tell their inspiring stories.',
	},
	{
		title: 'Girls in Helmet',
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273327/event3_dwoa1q.jpg',
		text:
			'Getting kids ready for Engineering tracks, and giving them a push to the robotics world, were the goals of that event. Not only theoretically, but in collaboration with other institutes, kids made real projects in teams which is the foundation of great projects in the future.',
	},
];

const WIEEvents = () => {
	return (
		<>
			<div id='events' className='container'>
				<h1
					className='text-center display-1 mb-5 my-5 pt-5 pb-4 font-weight-bold wow fadeIn'
					data-wow-delay='0.2s'
				>
					Events
				</h1>
				<div
					className='row d-flex justify-content-center wow fadeIn'
					data-wow-delay='0.2s'
				>
					{EventsData.map((el) => {
						return <AchCard cardHeight='500px' card={el} />;
					})}
				</div>
			</div>
		</>
	);
};

export default WIEEvents;
