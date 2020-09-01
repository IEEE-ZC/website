import React from 'react';
import Moment from 'react-moment';

const MagazineCard = ({
	image = 'https://mdbootstrap.com/img/Photos/Others/img%20(43).jpg',
	title,
	content,
	date,
	author,
}) => {
	return (
		<main>
			<div className='row'>
				<div className='col-md-12 mb-4'>
					<div className='card mb-3 text-center hoverable'>
						<div className='card-body'>
							<div className='row align-items-center'>
								<div className='col-md-5 mx-3 my-3'>
									<div className='view overlay rgba-white-slight'>
										<img
											src={image}
											className='img-fluid rounded'
											alt=''
										/>
									</div>
								</div>
								<div className='col-md-6 text-left ml-xl-3 ml-lg-0 ml-md-3 mt-3'>
									<h4 className='mb-4'>
										<strong>{title}</strong>
									</h4>
									<p className='dark-grey-text'>{content}</p>
									<p>
										by <strong> {author}</strong>
										, <Moment from='2020-04-19' ago date={date} />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MagazineCard;
