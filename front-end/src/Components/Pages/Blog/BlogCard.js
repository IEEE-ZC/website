import React from 'react';
import Moment from 'react-moment';

const BlogCard = ({
	image = 'https://mdbootstrap.com/img/Photos/Others/img%20(43).jpg',
	title,
	content,
	date,
	author,
	onClick,
}) => {
	return (
		<div
			className='col-md-6 mb-4'
			style={{ cursor: 'pointer' }}
			onClick={onClick}
		>
			<div className='card mb-3 text-center hoverable'>
				<div className='card-body' style={{ borderRadius: '5px' }}>
					<div className='row align-items-center'>
						<div className='col-md-5 mx-3 my-3 p-0'>
							<div className='view overlay rgba-white-slight'>
								<img
									src={image}
									className='img-fluid rounded-bottom'
									alt='Sample'
								/>
							</div>
						</div>

						<div className='col-md-6 text-left ml-xl-3 ml-lg-0 ml-md-3'>
							<h4 className='mb-2'>
								<strong>{title}</strong>
							</h4>

							<p className='dark-grey-text mb-2'>
								{content > 50
									? content
									: content.substring(0, 35) + '...'}
							</p>

							<p className='m-0'>
								by <strong>{author}</strong>
								<Moment from='2020-04-19' date={date} />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
