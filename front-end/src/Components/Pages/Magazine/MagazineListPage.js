import React from 'react';
import Header from '../../Layout/Header';
import MagazineCard from './MagazineCard';

const MagazineListPage = () => {
	return (
		<>
			<Header
				heading='hello world this is me'
				content='Lorem ipsum dolor sit amet.'
			/>
			<main>
				<div className='container-fluid mt-5'>
					<div className='row'>
						<div className='col-xl-12 col-lg-12 col-md-12'>
							<section>
								<div className='row'>
									<MagazineCard
										title='hello world'
										image='http://ieeepuasb.com/images/magazines/1596293856.png'
									/>
									<MagazineCard
										title='hello world'
										image='http://ieeepuasb.com/images/magazines/1596293856.png'
									/>
									<MagazineCard
										title='hello world'
										image='http://ieeepuasb.com/images/magazines/1596293856.png'
									/>
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default MagazineListPage;
