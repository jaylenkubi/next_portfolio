import Link from 'next/link';
import Image from 'next/image';
import Title from '@/app/(home)/components/title';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HeroSection() {
	return (
		<div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
			<div className={ "space-y-10 text-center lg:text-left" }>
				<h1 className={ "text-4xl font-bold lg:text-7xl" }>
					Nice to meet you! <br/> <span
					className="underline underline-offset-8 decoration-blue-400 inline-flex flex-col items-center">
            I am Jaylen. 🚀
          </span>
				</h1>
				<p className={ "md:w-96 text-lg text-gray=300" }>
					Driven full stack developer with years of experience designing, building and maintaining web and
					mobile applications.
				</p>
				<Link href={ "mailto:jaylenkubi@gmail.com" } className={ "inline-block group" }>
					<Title text={ "Contact Me 🛰️" }/>
				</Link>
			</div>
			<div>
				<div className="relative h-72 w-72">
					<div className="absolute inset-0 rounded-full  shadow-lg"></div>
					<div
						className="absolute inset-0 rounded-full bg-transparent border-[6px] border-green-400 border-b-transparent border-r-transparent"></div>
					<div className="absolute inset-6 rounded-full  shadow-inner"></div>
					<div
						className="absolute inset-6 rounded-full border-[6px] border-blue-400 border-b-transparent border-l-transparent"></div>
					<div className="absolute inset-12 ">
						<Avatar className="h-full w-full rounded-full">
							<AvatarImage src="https://github.com/shadcn.png"/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</div>
	)
}
