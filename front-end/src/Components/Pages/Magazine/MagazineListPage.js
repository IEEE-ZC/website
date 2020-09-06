import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// components
import Header from '../../Layout/Header';
import MagazineCard from './MagazineCard';
import Preloader from '../../Layout/Preloader'

// API endpoint
import { MAGAZINE } from '../../../EndPoints';

const MagazineListPage = () => {
	let history = useHistory();
	const [magazines, setMagazines] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		axios
			.get(`${MAGAZINE}?_sort=createdAt`)
			.then((res) => {
				setMagazines(res.data.reverse());
				setLoading(false);
			});
	}, []);

	

	const container = {
		hidden: { opacity: 0, y: 50, scale: 0.8 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<>
			<AnimatePresence>{loading && <Preloader />}</AnimatePresence>
			<Header darken heading='IEEE MAGAZINE' image="https://res.cloudinary.com/strapiieee/image/upload/v1599399592/medium_DSC_2133es_Recovered_74c29a0502.jpg" />
			<main>
				<div className='container my-5'>
					<div className='row'>
						<div className='col-xl-12 col-lg-12 col-md-12'>
							<section>
								<motion.div
									className='row justify-content-center'
									variants={container}
									initial='hidden'
									animate='show'
								>
									{magazines.map(magazine => (
										<MagazineCard
											key={magazine._id}
											title={magazine.title}
											image={magazine.cover.url}
											time='7/13'
											variants={item}
											onClick={() => history.push(`/magazine/${magazine._id}`)}
										/>
									))}
								</motion.div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default MagazineListPage;
