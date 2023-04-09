import Image from "next/image";
import noResultImg from "@/assets/images/noResult.svg";

export default function NotFound() {
	return (
		<div className='relative w-full  flex flex-col gap-10 mt-4 justify-center'>
			<p className="font-medium text-md">No Result Found.</p>
			<div className="relative h-[70vh]">
				<Image src={noResultImg} alt='Result not found' fill />
			</div>
		</div>
	);
}
