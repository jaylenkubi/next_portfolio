import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMantine, SiMysql, SiPostgresql, SiReact } from 'react-icons/si';
import Title from '@/app/(home)/components/title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';


export default function Projects() {

	const projects = [
		{
			title: "The Cube",
			tech: [ SiReact, SiMantine, FaNodeJs, SiPostgresql, SiExpress ],
			link: "#",
			cover: "/the-cube.png",
			background: "bg-blue-400"
		}, {
			title: "The Cube",
			tech: [ SiReact, SiMantine, FaNodeJs, SiPostgresql, SiExpress ],
			link: "#",
			cover: "/the-cube.png",
			background: "bg-green-400"
		}
	]
	return (
		<div className={ "py-10 p-5 sm:p-0" }>
			<Title text={ "Projects 🛸" } className={ "flex flex-col items-center justify-center -rotate-6" }/>
			<div className={ "grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5" }>
				{
					projects.map((project, idx) => {
						return (
							<Link key={ idx } href={ project.link }>
								<div className={ cn("p-5 rounded-md", project.background) }>
									<DirectionAwareHover
										imageUrl={ project.cover }
										className={ "w-full space-y-5 cursor-pointer" }
									>
										<div className={"space-y-5"}>
											<h1 className={ "text-2xl font-bold" }>{ project.title }</h1>
											<div className={ "flex items-center gap-5" }>
												{
													project.tech.map((Icon, idx) => (
														<Icon className={ "w-8 h-8" } key={ idx }/>
													))
												}
											</div>
										</div>
									</DirectionAwareHover>
								</div>
							</Link>
						)
					})
				}
			</div>
		</div>
	)
}