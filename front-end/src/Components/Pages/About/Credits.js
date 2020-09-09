import React from 'react';

const Credits = ({ CreditsData }) => {
	return (
		<>
			<div
				className={`col-lg-6 col-md-12 mb-3 wow ${CreditsData.animation}`}
				data-wow-delay='0.2s'
			>
				<div className='row h-100'>
					<div className='col-md-6'>
						<img
							src={CreditsData.image}
							className='rounded z-depth-1 w-100 h-100'
							style={{ objectFit: 'cover' }}
							alt='First sample avatar'
						/>
					</div>

					<div
						className='col-md-6 mt-3'
					>
						<h3 className='text-center'>
							<strong>{CreditsData.name}</strong>
						</h3>
						<h6 className='text-center font-weight-bold grey-text mb-4'>
							{CreditsData.job}
						</h6>
						<p className='text-center grey-text'>
							{CreditsData.about}
						</p>

						<div className='d-flex flex-lg-wrap justify-content-center mt-2 text-center'>
							{CreditsData.socialLinks.map((el) => {
								return (
									<a
										key={el.website}
										href={el.website}
										className='p-2 m-2 fa-lg fb-ic'
									>
										<i
											style={{ color: '#1d2d50' }}
											className={`${el.icon} fa-2x`}
										>
											{' '}
										</i>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Credits;
