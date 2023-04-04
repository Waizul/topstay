"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className='w-full max-w-[1100px] h-[60px] mx-auto border-b-2 border-blue-200'>
			<div className='h-full flex flex-col justify-center px-2 lg:px-0'>
				<div className='f-full flex items-center justify-between text-sky-500'>
					<div className=' text-lg font-bold cursor-pointer'>TopStay</div>
					<ul className='hidden md:flex gap-4'>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							Home
						</li>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							Buy Property
						</li>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							Rent Property
						</li>
					</ul>

					<div className='flex items-center gap-2 border-2 border-blue-200 px-2 py-1 rounded-md'>
						<FiSearch />
						<input
							type='text'
							placeholder='Search property'
							className='outline-none text-black'
						/>
					</div>

					<div className='relative md:hidden'>
						<button
							className='p-2 rounded-full'
							type='button'
							onClick={() => setMenuOpen(!menuOpen)}
						>
							<div className={`animated-icon ${menuOpen ? "open" : ""}`}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</button>

						{menuOpen && (
							<div className='absolute top-10 right-0 text-sky-500 bg-white w-screen h-[calc(100vh-50px)]'>
								<ul className='h-full flex flex-col items-center justify-center gap-4 text-xl'>
									<li className='w-[130px] cursor-pointer transition-all ease-in hover:font-medium hover:text-red-400'>
										Home
									</li>
									<li className='w-[130px] cursor-pointer transition-all ease-in hover:font-medium hover:text-red-400'>
										Buy Property
									</li>
									<li className='w-[130px] cursor-pointer transition-all ease-in hover:font-medium hover:text-red-400'>
										Rent Property
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
