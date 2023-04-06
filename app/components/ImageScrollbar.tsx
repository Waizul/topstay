"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import {
	FaArrowAltCircleLeft,
	FaGalacticRepublic,
	FaArrowAltCircleRight,
} from "react-icons/fa";

const LeftArrow = () => {
	const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

	return (
		<div className='flex items-center mr-1'>
			<FaArrowAltCircleLeft
				// disabled={isFirstItemVisible}
				onClick={() => scrollPrev()}
				className='text-xl cursor-pointer'
			/>
		</div>
	);
};

const RightArrow = () => {
	const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

	return (
		<div className='flex items-center'>
			<FaArrowAltCircleRight
				// disabled={isLastItemVisible}
				onClick={() => scrollNext()}
				className='text-xl cursor-pointer'
			/>
		</div>
	);
};
const ImageScrollbar = ({ photos }) => {
	return (
		<div className='w-full pt-4'>
			<ScrollMenu
				LeftArrow={LeftArrow}
				RightArrow={RightArrow}
				options={{
					threshold: [0.9],
					throttle: 0,
				}}
				
			>
				{photos.map((item) => (
					<div
						key={item.id}
						itemID={item.id}
						className='w-[96vw] md:w-[96vw] lg:w-[75vw] h-[50vh] md:h-[82vh] lg:h-[82vh] p-1 overflow-hidden relative'
					>
						<Image
							placeholder='blur'
							blurDataURL={item.url}
							src={item.url}
							alt='Property'
							fill
							sizes='(max-width: 500px) 100px,(max-width: 1023px) 400px, 1000px'
						/>
					</div>
				))}
			</ScrollMenu>
		</div>
	);
};

export default ImageScrollbar;
