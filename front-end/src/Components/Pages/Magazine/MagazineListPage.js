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
			<div className='container-fluid mt-5'>
				<div className='row'>
					<div className='col-xl-12 col-lg-12 col-md-12'>
						<section>
							<MagazineCard
								title='hello world'
								content=' lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
								author='devien george'
								date={new Date()}
							/>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default MagazineListPage;
