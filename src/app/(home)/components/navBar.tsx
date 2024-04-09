import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { cn } from '@/lib/utils';


export default function NavBar({className}: { className?: string }) {

	const socials = [
		{

			link: "https://www.linkedin.com/in/jaylen-kubi/",
			label: "LinkedIn",
			Icon: SiLinkedin
		},
		{
			link: "https://github.com/jaylenkubi",
			label: "GitHub",
			Icon: SiGithub
		}
	]

	return (
		<nav className={cn("py-10 flex items-center justify-between", className)}>
			<h1 className={"text-2xl font-bold underline underline-offset-8 decoration-blue-400 rotate-2"}>Jaylen Appiah-Kubi</h1>
			<div className={"flex items-center gap-4"}>
				{
					socials.map((social) => {
						const Icon = social.Icon
						return <Link href={ social.link } aria-label={ social.label }>
							<Icon className={"w-5 h-5 hover:scale-125 transition"}/>
						</Link>
					})
				}
			</div>
		</nav>
	);
}