import React from 'react';

const MemberCard = ({ Card }) => {
	return (
		<>
			<div className='col-lg-3 col-md-6 mb-4 '>
				<div
					style={{ height: '320px' }}
					className='card hoverable card-body'
				>
					<div className='avatar mx-auto mt-3 mb-3'>
						<img
							style={{
								width: '150px',
								height: '150px',
								objectFit: 'cover',
							}}
							src={Card.image.name}
							className='rounded-circle'
							alt='...'
						/>
					</div>
					<h6
						style={{ color: '#112E68' }}
						className='font-weight-bold title text-center text-uppercase '
					>
						{Card.name}
					</h6>
					<p className='grey-text text-center text-capitalize'>
						{Card.job}
					</p>
				</div>
			</div>
		</>
	);
};

export default MemberCard;
