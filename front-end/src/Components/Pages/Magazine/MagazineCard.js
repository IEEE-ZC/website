import React from 'react';
import Moment from 'react-moment';

const MagazineCard = ({
	image = 'https://mdbootstrap.com/img/Photos/Others/img%20(43).jpg',
	title,
	hello,
	content,
	date,
	author,
}) => {
	return (
		// <main>
		// 	<div className='row'>
		// 		<div className='col-md-12 mb-4'>
		// 			<div className='card mb-3 text-center hoverable'>
		// 				<div className='card-body'>
		// 					<div className='row align-items-center'>
		// 						<div className='col-md-5 mx-3 my-3'>
		// 							<div className='view overlay rgba-white-slight'>
		// 								<img
		// 									src={image}
		// 									className='img-fluid rounded'
		// 									alt=''
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className='col-md-6 text-left ml-xl-3 ml-lg-0 ml-md-3 mt-3'>
		// 							<h4 className='mb-4'>
		// 								<strong>{title}</strong>
		// 							</h4>
		// 							<p className='dark-grey-text'>{content}</p>
		// 							<p>
		// 								by <strong> {author}</strong>
		// 								, <Moment from='2020-04-19' ago date={date} />
		// 							</p>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </main>
		<div className='col-md-6 col-lg-3'>
			<div className='card card-personal mb-4'>
				<div className='view overlay'>
					<img
						className='card-img-top'
						src='https://mdbootstrap.com/img/Photos/Others/square/9.jpg'
						alt='Card'
					/>
				</div>
				<div className='card-body'>
					<h4 className='card-title'>
						<strong>Title of the news</strong>
					</h4>
					<p className='card-text mt-2'>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<span>
						<i className='fas fa-user pr-1'></i>Tom Brown
					</span>
					<p className='card-meta float-right'>18/08/2017</p>
				</div>
			</div>
		</div>
	);
};

export default MagazineCard;
