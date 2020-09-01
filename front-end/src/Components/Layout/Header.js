import React from 'react';

const Header = ({ image, heading, content }) => {
	return (
		<div
			style={{
				backgroundImage:
					"url('https://mdbootstrap.com/img/Photos/Others/slide4.jpg')",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='full-bg-img  flex-center white-text rgba-stylish-strong'>
				<ul className='animated fadeIn col-md-12 list-unstyled'>
					<li>
						<h1 className='h1-responsive font-weight-bold mt-5 pt-5 '>
							{heading}
						</h1>
					</li>
					<li>
						<p>{content}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
