import React from 'react';

// Components
import AchievCard from '../Cards/AchievCard';

const AchievementsData = [
	{
		id: 1,
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273429/ac1_dvz4ur.png',
		title: 'IEEE Magazine',
		text:
			'Continuing on the path drawn by our previous slogan “Building Community”, we aim to create afriendly environment, rich in both technical and non-technical expertise. We dream to bring back the IEEE Zewail City branch as strong as it was and leave a national impact and an in-erasable fingerprint in the fields of Engineering in Egypt and world wide. We shall strive for Zewail City to leave the message that its name holder had long fought to deliver!',
	},
	{
		id: 2,
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273431/ac2_xdhsrl.jpg',
		title: 'E-Academy',
		text:
			'IAn Engineering service provided through IEEE ZC aims to qualify students in ZC, specifically IEEE members to have first places in future competitions and add to their academic arsenal in-terms of technical experience',
	},
	{
		id: 3,
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273434/ac3_gb1bfz.jpg',
		title: "Youth Leaders' Foundation Competition",
		text:
			"Youth Leaders' Foundation (YLF) is a well-established non-profit organization founded in 2017 by a team of extremely passionate, active and dedicated staff who have previously worked on youth development programs nationally and internationally. IEEE'20 participated with the project of IEEE Magazine.",
	},
	{
		id: 4,
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273437/ac4_e0wcgt.jpg',
		title: "Maker Faire'20",
		text:
			"Maker Faire is the Greatest Show (and Tell) on Earth—a family-friendly festival of invention, creativity and resourcefulness, and a celebration of the Maker movement. Part science fair, part county fair, and part something entirely new, Maker Faire is an all-ages gathering of tech enthusiasts, crafters, educators, tinkerers, hobbyists, engineers, science clubs, authors, artists, students, and commercial exhibitors. All of these “makers” come to Maker Faire to show what they have made and to share what they have learned. IEEE'20 Joined representing Zewail City students' projects.",
	},
];

const Achievements = () => {
	return (
		<>
			<div style={{ backgroundColor: '#F3F3F5' }} id='achievements'>
				<div style={{ height: '60px' }}></div>
				<h1
					className='display-1 mt-5 text-center wow fadeInUp'
					data-wow-delay='0.2s'
				>
					Achievements
				</h1>

				<div className='container'>
					<div className='row d-flex justify-content-around'>
						{AchievementsData.map((card) => {
							return <AchievCard key={card.id} card={card} />;
						})}
					</div>
					<div style={{ height: '60px' }}></div>
				</div>
			</div>
			<div style={{ height: '60px' }}></div>
		</>
	);
};

export default Achievements;
