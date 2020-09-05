/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Modal = ({ setActiveModal, activeModal }) => {
	return (
		<div
			className='modal  fade'
			id='centralModal'
			tabIndex='-1'
			role='dialog'
			aria-labelledby='myModalLabel'
			aria-hidden='true'
		>
			<div
				className='modal-dialog modal-lg modal-notify modal-info'
				role='document'
			>
				{/* <!-- Content --> */}
				<div className='modal-content'>
					{/* <!-- Header --> */}
					<div
						className='modal-header'
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '10px 24px',
						}}
					>
						<p className='heading lead'>Youtube Video</p>
						<button
							type='button'
							className='close m-0 p-0'
							data-dismiss='modal'
							aria-label='Close'
							onClick={() => setActiveModal(false)}
						>
							<span aria-hidden='true' className='white-text'>
								&times;
							</span>
						</button>
					</div>

					{/* <!-- Body --> */}
					<div className='modal-body'>
						{activeModal && (
							<iframe
								width='100%'
								height='400px'
								src='https://www.youtube.com/embed/SYlF2_9Zf6w'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
