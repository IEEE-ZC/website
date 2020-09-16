import React from 'react';

// Components
import WiderCard from '../Cards/WiderCard';

const EventsData = [
	{
		id: '1',
		title: `AppX20': Shape the Future`,
		text:
			'Here is the annual event comes again after a lot of waiting. Thanks to every member this is one of the most appreciated events in the history of the university!',
		date: '10 - 10 - 2020',
		imgSource:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273313/appx_zif8dx.jpg',
	},
	{
		id: '2',
		title: `Crisis Engineering Management - CEC20`,
		text:
			'IEEE Zewail City is hosting the Crisis Engineering Contest to connect civil society, mentors, developers, analytic engineers, innovators, and other related fields to develop new.',
		date: '27 - 6 - 2020',
		imgSource:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273317/cec_faohkg.jpg',
	},
];

const Events = () => {
	return (
		<>
			<div id='events' style={{ height: '60px' }}></div>
			<div style={{ height: '10px' }}></div>
			<h1
				className='display-1 mt-5 text-center wow fadeInUp'
				data-wow-delay='0.2s'
			>
				Events
			</h1>
			<div className='container'>
				<div className='row d-flex justify-content-around'>
					{EventsData ? (
						EventsData.map((event) => {
							return <WiderCard key={event.id} event={event} />;
						})
					) : (
						<h1 className='text-center'> No Events available</h1>
					)}
				</div>
			</div>
			<div style={{ height: '60px' }}></div>
		</>
	);
};

export default Events;
