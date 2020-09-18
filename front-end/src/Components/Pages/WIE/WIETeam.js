import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import MemberCard from '../../Cards/MemberCard';

// API endpoint
import { JUNIORS } from '../../../EndPoints';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../Layout/Preloader';

const WIETeam = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(JUNIORS).then((res) => {
			setData(res.data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<AnimatePresence>{loading && <Preloader />}</AnimatePresence>
			<h1
				id='team-members-Wie'
				className='text-center display-1 mb-5 my-5 pt-5 pb-4 font-weight-bold wow fadeIn'
				data-wow-delay='0.2s'
			>
				Our Team
			</h1>

			<div
				className='container mb-4 wow fadeIn'
				data-wow-delay='0.4s'
			>
				<div className='row'>
					{data !== []
						? data.map((el) => <MemberCard key={el.id} Card={el} />)
						: null}
				</div>
			</div>
		</>
	);
};

export default WIETeam;
