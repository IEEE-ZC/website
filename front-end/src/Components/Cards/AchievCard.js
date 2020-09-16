import React from 'react';

const AchievCard = ({ card, cardHeight }) => {
	return (
		<div
			className='col-md-6 col-sm-12 mb-4 mt-5  wow fadeInUp'
			data-wow-delay='0.2s'
		>
			<div
				style={{ height: cardHeight ? cardHeight : '700px' }}
				className='card card-cascade hoverable'
			>
				<div className='view view-cascade overlay'>
					<img src={card.img} className='card-img-top' alt='...' />

					<div className='mask rgba-white-slight'></div>
				</div>
				<div className='card-body card-body-cascade text-center'>
					<h4 className='card-title mt-3'>
						<strong>{card.title}</strong>
					</h4>
					<h5 className='blue-text'>
						<strong>{card.year}</strong>
					</h5>

					<p className='card-text'>{card.text}</p>
				</div>
			</div>
		</div>
	);
};

export default AchievCard;
