import React from 'react';

const Header = ({
	image = 'https://mdbootstrap.com/img/Photos/Others/slide4.jpg',
	heading,
	content,
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				filter: 'brightness(0.5)',
				height: '400px',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='full-bg-img  flex-center white-text rgba-stylish-strong p-5'>
				<ul
					style={{ padding: '7rem 0rem' }}
					className='animated fadeIn col-md-12 list-unstyled m-0'
				>
					{heading && (
						<li>
							<h1 className='h1-responsive font-weight-bold'>
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
