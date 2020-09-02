import React from 'react';

const MagazineCard = ({
	image = 'http://ieeepuasb.com/images/magazines/1596293856.png',
	title,
	onPress,
}) => {
	return (
		<div className='col-md-6 col-lg-3' onClick={onPress}>
			<div
				className='card card-personal mb-4'
				style={{ cursor: 'pointer' }}
			>
				<div className='view overlay' style={{ cursor: 'pointer' }}>
					<img
						className='card-img-top img-fluid'
						src={image}
						alt='Card'
					/>
				</div>
				<div className='card-body'>
					<h4 className='card-title m-0 text-center'>
						<strong>{title}</strong>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default MagazineCard;
