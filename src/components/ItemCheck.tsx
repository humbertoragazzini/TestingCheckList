import { useState } from "react";

export default function ItemChack() {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className="grid grid-cols-12 text-black font-bold">
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-1">1</div>
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-4">
				Check ARIA in {"<a>"} tags
			</div>
			<div className="bg-red-200 border-1 border-red-300 p-3 col-span-5">
				Comment
			</div>
			<div
				onClick={() => {
					setIsChecked(!isChecked);
				}}
				className="bg-red-200 border-1 border-red-300 p-3 col-span-2 cursor-pointer"
			>
				<button className="flex justify-center items-center cursor-pointer">
					Checked?{" "}
					<span className="flex justify-center items-center ml-4 w-5 h-5 bg-white">
						{isChecked && <>X</>}
					</span>
				</button>
			</div>
		</div>
	);
}
