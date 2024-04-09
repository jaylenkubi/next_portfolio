"use client";
import Title from '@/app/(home)/components/title';
import {
	SiDocker,
	SiGit,
	SiJavascript, SiMysql,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { HoverEffect } from '@/components/ui/card-hover-effect';


export default function Skills() {
	const skills = [
		{
			text: "HTML",
			Icon: FaHtml5
		},
		{
			text: "CSS",
			Icon: FaCss3Alt
		},
		{
			text: "JavaScript",
			Icon: SiJavascript
		},
		{
			text: "TypeScript",
			Icon: SiTypescript
		},
		{
			text: "React",
			Icon: SiReact
		},
		{
			text: "Next.js",
			Icon: SiNextdotjs
		},
		{
			text: "Tailwind",
			Icon: SiTailwindcss
		},
		{
			text: "Node.js",
			Icon: FaNodeJs
		},
		{
			text: "Postgres",
			Icon: SiPostgresql
		}, {
			text: "MySQL",
			Icon: SiMysql
		},
		{
			text: "Git",
			Icon: SiGit
		},
		{
			text: "Docker",
			Icon: SiDocker
		}
	]
	return (
		<div className={ "max-w-5xl mx-auto px-8" }>
			<Title text={ "Skills 💫" } className={ "flex flex-col items-center justify-center rotate-6" }/>
			<HoverEffect items={ skills }/>
		</div>
	);
}