import React from 'react';
import Moment from 'react-moment';
import { motion } from 'framer-motion';

const MagazineCard = ({
	image = 'http://ieeepuasb.com/images/magazines/1596293856.png',
	title,
	time,
	variants,
	onClick,
}) => {
	return (
		<motion.div
			variants={variants}
			className='col-sm-12 col-md-6 col-lg-4'
			onClick={onClick}
			initial={{ scale: 1 }}
			transition={{ stiffness: 15, ease: 'easeInOut', duration: 0.2 }}
			whileHover={{ scale: 1.05 }}
		>
			<div
				className='card card-personal mb-4 hoverable'
				style={{
					cursor: 'pointer',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<motion.img
					className='card-img-top img-fluid'
					src={image}
					alt='Card'
				/>
				<div className='card-body'>
					<h4 className='card-title m-0 text-center'>
						<strong>{title}</strong>
					</h4>
					<h5 className='card-title m-0 text-center blue-text'>
						<strong>
							<Moment date={time} toNow format='D MMM Y' />
						</strong>
					</h5>
				</div>
			</div>
		</motion.div>
	);
};

export default MagazineCard;
