import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import Header from '../../Layout/Header';
import MagazineCard from './MagazineCard';

const MagazineListPage = () => {
	let history = useHistory();
	const [magazines, setMagazines] = useState([]);

	useEffect(() => {
		axios
			.get('https://sleepy-falls-48407.herokuapp.com/magazines?_sort=createdAt')
			.then((res) => {
				setMagazines(res.data.reverse());
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
			<Header heading='IEEE MAGAZINE' />
			<main>
				<div className='container mt-5'>
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
