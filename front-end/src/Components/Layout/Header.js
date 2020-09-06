import React from 'react';

const Header = ({
	image = 'https://mdbootstrap.com/img/Photos/Others/slide4.jpg',
	heading,
	content,
	darken,
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				height: '400px',
				backgroundPosition: 'top',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div
				className={`full-bg-img flex-center white-text ${
					darken ? 'rgba-black-light' : 'rgba-black-slight'
				} p-5`}
			>
				<ul
					style={{ padding: '7rem 0rem' }}
					className='animated fadeIn col-md-12 list-unstyled m-0'
				>
					{heading && (
						<li>
							<h1
								className='h1-responsive font-weight-bold m-0'
								style={{ textShadow: '0 0 11px black' }}
							>
								{heading}
							</h1>
						</li>
					)}
					{content && (
						<li>
							<p>{content}</p>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Header;
