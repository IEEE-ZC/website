import React, { useEffect} from 'react';

// components
import Events from './Sections/Events';
import Achievements from './Sections/Achievements';
import About from './Sections/About';
import CoreValue from './Sections/CoreValue';
import WatchUs from './Sections/WatchUs';
import ScrollSpy from './Sections/ScrollSpy';
import Intro from './Sections/Intro';
import WOW from 'wowjs';
const LandingPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'IEEE| Home';
		new WOW.WOW().init();
	}, []);

	const IntroProps = {
		Slogan: 'Building Community',
	};

	const AboutProps = {
		title: 'A Glimpse',
		text:
			" When a leader, be a serving bottle that flows into others' cups. You have the responsibility of filling your bottle with sufficient knowledge to flow it into their cups, and when you do; knowledge will prevail in the whole team. ",
		img:
			'https://res.cloudinary.com/ieeezc/image/upload/v1600273223/glimpse_yczajc.jpg',
	};

	const ScrollSpyItems = {
		NavItems: [
			{ id: 1, name: 'Home', href: 'home' },
			{ id: 2, name: 'Events', href: 'events' },
			{ id: 3, name: 'Achievements', href: 'achievements' },
			{ id: 4, name: 'Glimpse', href: 'about' },
			{ id: 5, name: 'Core Values', href: 'core-values' },
			{ id: 6, name: 'Watch Us', href: 'watch-us' },
			{ id: 8, name: 'Contact US', href: 'contact-us' },
		],
	};

	return (
		<>
			<Intro IntroProps={IntroProps} />
			<Events />
			<ScrollSpy Items={ScrollSpyItems.NavItems} />
			<Achievements />
			<About AboutProps={AboutProps} />
			<CoreValue />
			<WatchUs />
		</>
	);
};

export default LandingPage;
