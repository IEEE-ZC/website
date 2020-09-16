import React from 'react';

// Components
import AchCard from '../../Cards/AchievCard';

const JuniorsEvents = () => {
	const EventsData = [
		{
			title: 'Robo Camp',
			img:
				'https://res.cloudinary.com/ieeezc/image/upload/v1600273343/juniors1_gqdfrd.jpg',
			text:
				'RoboCamp is an annual event that aims to introduce the concept of robotics to children. Along the event, children were divided into teams so as to learn how to work inside a group, the group learned together, started to think together and faced their problems together. At the end of the event each group proposed their project-a car that is controlled remotely- to their colleagues and instructors. The last version of this event took place in January 2020.',
		},
		{
			title: 'APS Camp',
			img:
				'https://res.cloudinary.com/ieeezc/image/upload/v1600273346/juniors2_qctgkb.jpg',
			text:
				'Algorithm problem solving, that was the main vision for this event that aimed to teach children how to think in a logical way. Children were engaged in a mystery of fmding a treasure using problem solving algorithms with each milestone they reach. This event added to the child some new concepts like: flowcharts, algorithm, and critical thinking .',
		},
	];

	return (
		<>
			<div id='events' className='container'>
				<h1
					className='text-center display-1 mb-5 my-5 pt-5 pb-4 font-weight-bold wow fadeIn'
					data-wow-delay='0.2s'
				>
					Events
				</h1>
				<div className='text-center'>
					<p>
						Along our journey, we passed by a lot of cheerful moments,
						moments of gratitude and pride, we have introduced to the
						society the beginning of new leaders and decision makers.
					</p>
				</div>
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

export default JuniorsEvents;
