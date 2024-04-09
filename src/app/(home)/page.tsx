import React from 'react';
import NavBar from '@/app/(home)/components/navBar';
import HeroSection from '@/app/(home)/components/heroSection';
import { Meteors } from '@/components/ui/meteors';
import Skills from '@/app/(home)/components/skills';
import Projects from '@/app/(home)/components/projects';
import Footer from '@/app/(home)/components/footer';


export default function Page() {
	return (
		<div className="min-h-screen bg-black overflow-hidden relative">
			<div className="max-w-7xl mx-auto p-5 overflow-hidden relative">
				<NavBar/>
				<HeroSection/>
				<div className=" mt-20">
					<Skills/>
				</div><div className=" mt-20">
					<Projects/>
				</div>
				<div className=" mt-10">
					<Footer/>
				</div>
			</div>
			<Meteors number={ 30 }/>
		</div>
	);
}