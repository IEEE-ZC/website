import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
	return (
		<motion.div
			initial={{ opacity: 0.7 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: 'tween', ease: 'easeOut' }}
			style={{ zIndex: 1500, top: 0, bottom: 0, left: 0, right: 0 }}
			className='align-items-center bg-dark d-flex fixed h-100 justify-content-center position-fixed w-100'
		>
			<div className='preloader-wrapper big active'>
				<div className='spinner-layer spinner-blue'>
					<div className='circle-clipper left'>
						<div className='circle'></div>
					</div>
					<div className='gap-patch'>
						<div className='circle'></div>
					</div>
					<div className='circle-clipper right'>
						<div className='circle'></div>
					</div>
				</div>
				<div className='spinner-layer spinner-red'>
					<div className='circle-clipper left'>
						<div className='circle'></div>
					</div>
					<div className='gap-patch'>
						<div className='circle'></div>
					</div>
					<div className='circle-clipper right'>
						<div className='circle'></div>
					</div>
				</div>
				<div className='spinner-layer spinner-yellow'>
					<div className='circle-clipper left'>
						<div className='circle'></div>
					</div>
					<div className='gap-patch'>
						<div className='circle'></div>
					</div>
					<div className='circle-clipper right'>
						<div className='circle'></div>
					</div>
				</div>
				<div className='spinner-layer spinner-green'>
					<div className='circle-clipper left'>
						<div className='circle'></div>
					</div>
					<div className='gap-patch'>
						<div className='circle'></div>
					</div>
					<div className='circle-clipper right'>
						<div className='circle'></div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Preloader;
