import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

import LocalCard from "../components/cards/LocalCard";

function LocalsSearchedPage() {
	const { getSearchedLocals, searchedLocals } = useGlobalContext();

	const [searchParams] = useSearchParams();
	const where = searchParams.get('where');

	//dynamic params for search:
	const params = {
		where: where
	};
	console.log(searchedLocals);

	useEffect(() => {
		getSearchedLocals(params)
	}, [where]);
	return (
		<>
			<div className="text-center mt-1 mb-5">
				<h1 className="font-title text-xl md:text-xxl mb-3">Risultati di: {where}</h1>
				<div className="container m-auto px-4 flex justify-between">
					<h2 className='text-md'>{searchedLocals.length} Locali</h2>
					<select className="bg-yellow w-[100px] p-1 rounded-sm text-sm">
						<option value="">Ordina Per</option>
						<option value="">Prezzo Crescente</option>
						<option value="">Prezzo Decrescente</option>
					</select>
				</div>
				<div className="bg-light-gray text-left p-4">
					<h2 className='text-md'>Filtri</h2>
					<div className="flex justify-between">
						<select className="bg-yellow p-1 rounded-sm text-sm">
							<option value="">Tipologia</option>
						</select>
						<select className="bg-yellow p-1 rounded-sm text-sm">
							<option value="">Prezzo</option>
						</select>
						<select className="bg-yellow p-1 rounded-sm text-sm">
							<option value="">Valutazioni</option>
						</select>
					</div>
				</div>
			</div >
			<section className="m-auto container">
				<div>
					<LocalCard />
				</div>
			</section>
		</>
	)
}

export default LocalsSearchedPage