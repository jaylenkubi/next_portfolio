import Link from 'next/link';


export default function Title({text, className}: { text: string, className?: string }) {
	return (
		<div className={ className }>
			<h1 className={ "text-3xl font-bold group-hover:text-green-400 transition-all" }>{ text }</h1>
			<div className={ "w-40 h-2 bg-blue-400 rounded-full" }></div>
			<div className={ "w-40 h-2 bg-green-400 rounded-full translate-x-2" }></div>
		</div>
	)
}