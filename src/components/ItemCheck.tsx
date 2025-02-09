export default function ItemChack() {
	return (
		<div className="grid grid-cols-12 text-black font-bold">
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-1">1</div>
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-4">
				Check ARIA in {"<a>"} tags
			</div>
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-5">
				Comment
			</div>
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-2">
				<button className="flex justify-center items-center">
					Checked? <span className="block ml-4 w-4 h-4 bg-white"></span>
				</button>
			</div>
		</div>
	);
}
