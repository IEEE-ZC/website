import React from 'react';

// Components
import { Link } from 'react-router-dom';

const About = ({ AboutProps }) => {
	return (
		<>
			<div id='about'></div>
			<h1
				className='display-1 mt-5 text-center wow fadeInUp'
				data-wow-delay='0.2s'
			>
				A Glimpse
			</h1>

			<div className='container'>
				<div className='row'>
					<div
						className='view overlay zoom col-md-6 col-sm-12 mb-4 mt-5  wow fadeInUp'
						data-wow-delay='0.2s'
					>
						<img
							className='img-fluid z-depth-1 wow fadeInUp'
							data-wow-delay='0.2s'
							style={{ width: '100%' }}
							src={AboutProps.img}
							alt='...'
						/>
						<div className='mask flex-center waves-effect waves-light'>
							<p className='white-text'></p>
						</div>
					</div>
					<div className='col-md-6 col-sm-12 mb-4 mt-5'>
						<p
							className='text-center mt-5 wow fadeInUp'
							data-wow-delay='0.2s'
						>
							<i className='fas fa-quote-left' aria-hidden='true'></i>
							{AboutProps.text}
							<i
								className='fas fa-quote-right'
								aria-hidden='true'
							></i>
						</p>
						<h6 className='display-5 mt-2 text-center'>
							~ (Mohamed Hatem, Ex-Chair, 2018)
						</h6>
						<div
							className='d-flex justify-content-center wow fadeInUp'
							data-wow-delay='0.3s'
						>
							<Link
								to='/about'
								className='btn blue-gradient waves-effect btn-rounded btn-lg'
							>
								<i className='fas fa-heart mr-2'></i> ABOUT US
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
