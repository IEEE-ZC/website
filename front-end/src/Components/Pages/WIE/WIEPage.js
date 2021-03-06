import React, { useEffect } from 'react';
import WOW from 'wowjs';

// Components
import WIEIntro from './WIEIntro';
import WIETeam from './WIETeam';
import WIEEvents from './WIEEvents';

const WIEPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'IEEE| WIE';
		new WOW.WOW().init();
	}, []);

	const WIEIntroProps = {
		img:
			'url(https://res.cloudinary.com/ieeezc/image/upload/v1600275428/WIE_y0jgpb.png)',
		text:
			'Wie Affinity Group at IEEE Zewail City branch uses the Zewail City community and the perception of technology Zewailians have to put the technology in the hands of women who want, can, and hope to use it. Wie reach those who can’t reach us and enable those who can to hone their skills and empower them to lead a better future.',
	};

	return (
		<>
			<WIEIntro WIEIntroProps={WIEIntroProps} />
			<WIEEvents />
			<WIETeam />
		</>
	);
};

export default WIEPage;
