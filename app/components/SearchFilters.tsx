"use client";

import { useCallback, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { filterData, getFiltersValues } from "@/data/filterData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchFilters = () => {
	const [searchFilters, setSearchFilters] = useState(false);
	const [combinedSearch, setCombinedSearch] = useState(false);

	const [filters] = useState(filterData);
	// const [query, setQuery] = useState(searchParams);
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const searchProperties = (filterValues) => {
		const values = getFiltersValues(filterValues);

		values.forEach((item) => {
			if (item.value && filterValues?.[item.name]) {
				const query = createQueryString(item.name, item.value);

				//to get all the filters and apply them together
				// setQuery((prev) => {
				// 	return {
				// 		...prev,
				// 		[item.name]: item.value,
				// 	};
				// });

				console.log(createQueryString(item.name, item.value));
				router.push(pathname + "?" + query);
			}
		});
	};

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const newParams =
				combinedSearch === false
					? new URLSearchParams()
					: new URLSearchParams(searchParams);

			newParams.set(name, value);
			return newParams.toString();
		},
		[searchParams]
	);

	return (
		<div>
			<div
				className='flex items-center gap-1 justify-center font-bold text-lg bg-gray-200 border-b-2 border-gray-300 p-2 cursor-pointer'
				onClick={() => setSearchFilters(!searchFilters)}
			>
				<p>Search Property By Filters</p>
				<BsFilter />
			</div>

			{searchFilters && (
				<div className='bg-gray-200 p-4 flex flex-wrap gap-2'>
					{filters.map((filter) => (
						<div key={filter.queryName}>
							<select
								placeholder={filter.placeholder}
								className='w-fit p-2 rounded-md cursor-pointer outline-none'
								onChange={(e) =>
									searchProperties({ [filter.queryName]: e.target.value })
								}
							>
								<option value=''>{filter.placeholder}</option>
								{filter?.items?.map((item) => (
									<option key={item.value} value={item.value} className=''>
										{item.name}
									</option>
								))}
							</select>
						</div>
					))}

					<div className='w-fit p-2 rounded-md outline-none bg-white flex gap-2 h-fit'>
						<input
							type='checkbox'
							name='combined-search'
							onClick={() => setCombinedSearch(!combinedSearch)}
							className='text-xl cursor-pointer'
							style={{ zoom: "1.3" }}
						/>
						<label htmlFor='combined-search'>Combine Search</label>
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchFilters;
