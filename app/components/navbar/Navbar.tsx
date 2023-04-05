"use client";

import { useState } from "react";
import { FiSearch, FiKey } from "react-icons/fi";
import { FcHome, FcAbout } from "react-icons/fc";

import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className='w-full max-w-[1100px] h-[60px] mx-auto border-b-2 border-blue-200'>
			<div className='h-full flex flex-col justify-center px-2 lg:px-0'>
				<div className='f-full flex items-center justify-between text-sky-500'>
					<div className=' text-lg font-bold cursor-pointer'>
						<Link href='/'>TopStay</Link>
					</div>
					<ul className='hidden md:flex items-center gap-4 pr-4'>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							<Link href='/'>Home</Link>
						</li>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							<Link href='/search?purpose=for-sale'>Buy Property</Link>
						</li>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							<Link href='/search?purpose=for-rent'>Rent Property</Link>
						</li>
						<li className='cursor-pointer transition-all ease-in hover:text-red-400'>
							<Link href='/search' className='flex items-center gap-1'>
								<FiSearch />
								Search
							</Link>
						</li>
					</ul>

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
									<li className='w-[145px] cursor-pointer transition-all ease-in hover:text-red-400'>
										<Link href='/search' className='flex items-center gap-1'>
											<FiSearch />
											Search
										</Link>
									</li>
									<li className='w-[145px] cursor-pointer transition-all ease-in hover:text-red-400'>
										<Link href='/' className='flex items-center gap-1'>
											<FcHome />
											Home
										</Link>
									</li>
									<li className='w-[145px] cursor-pointer transition-all ease-in  hover:text-red-400'>
										<Link
											href='/search?purpose=for-sale'
											className='flex items-center gap-1'
										>
											<FcAbout />
											Buy Property
										</Link>
									</li>
									<li className='w-[145px] cursor-pointer transition-all ease-in  hover:text-red-400'>
										<Link
											href='/search?purpose=for-rent'
											className='flex items-center gap-1'
										>
											<FcAbout />
											Rent Property
										</Link>
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
