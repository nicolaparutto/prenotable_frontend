import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
//components:
import LocalCard from "../components/cards/LocalCard";

function LocalsSearchedPage() {
	const { getSearchedLocals, searchedLocals } = useGlobalContext();

	const [searchParams] = useSearchParams();
	const where = searchParams.get('where');
	//dynamic params for search:
	const params = {
		where: where
	};

	useEffect(() => {
		getSearchedLocals(params)
	}, [where]);
	return (
		<section className="pageSpacer">
			<div className="text-center">
				<h1 className="font-title text-xl md:text-xxl mb-3">Risultati di: {where}</h1>
			</div>
			<div className="hidden md:flex container m-auto justify-between my-3">
				<h2 className='text-md'>{searchedLocals.length} Locali</h2>
				<div className="flex">
					<select className="bg-yellow w-[100px] p-1 rounded-sm text-sm">
						<option value="">Ordina Per</option>
						<option value="">Prezzo Crescente</option>
						<option value="">Prezzo Decrescente</option>
					</select>
					<div className="ml-4">
						<button className="border-1 border-yellow text-yellow px-3 py-2 rounded-full mx-1"><i className="fa-solid fa-grip"></i></button>
						<button className="border-1 border-yellow text-yellow px-3 py-2 rounded-full mx-1"><i className="fa-solid fa-bars"></i></button>
					</div>
				</div>
			</div>
			<section className="bg-light-gray py-[10px] md:py-10">
				<section className="md:flex md:container md:m-auto">
					{/* filters */}
					<section className="border-r-2 border-main-gray md:w-[35%] lg:w-[20%]">
						<div className="md:hidden"> {/* mobile */}
							<div className="container m-auto px-4 flex justify-between my-3">
								<h2 className='text-md'>{searchedLocals.length} Locali</h2>
								<select className="bg-yellow w-[100px] p-1 rounded-sm text-sm">
									<option value="">Ordina Per</option>
									<option value="">Prezzo Crescente</option>
									<option value="">Prezzo Decrescente</option>
								</select>
							</div>
							<div className="bg-light-gray text-left p-4 md:px-0">
								<h2 className='text-md mb-1'>Filtri</h2>
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
						</div>
						<div className="hidden md:block p-3"> {/* desktop */}
							<h2 className='text-lg'>Tipologia</h2>
							<select name="" id="" className="bg-yellow w-[100px] p-1 rounded-sm text-sm">
								<option value="">Scegli</option>
							</select>
							<h2 className='text-lg'>Prezzo</h2>
							<div>
								<input type="radio" name="price" />
								<span>Economico</span>
							</div>
							<div>
								<input type="radio" name="price" />
								<span>Medio</span>
							</div>
							<div>
								<input type="radio" name="price" />
								<span>Costoso</span>
							</div>
							<div>
								<input type="radio" name="price" />
								<span>Lusso</span>
							</div>
							<h2 className='text-lg'>Valutazioni</h2>
							<div>
								<select name="" id="" className="bg-yellow w-[100px] p-1 rounded-sm text-sm">
									<option value="">Scegli</option>
								</select>
							</div>
						</div>
					</section>
					{/* results cards */}
					<section className="flex justify-center md:w-[65%] lg:w-[80%] mb-5">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
							{searchedLocals.length > 0 ?
								(
									searchedLocals.map(local => (
										<div key={local.id} className="">
											<LocalCard localData={local} />
										</div>
									))
								) : (
									<div>Nessun Risultato</div>
								)
							}
						</div>
					</section>
				</section>
			</section>
		</section>
	)
}

export default LocalsSearchedPage





// (
// 									searchedLocals.map(local => (
// 										<div key={local.id} className="">
// 											<LocalCard localData={local} />
// 										</div>
// 									))
// 								) : (
// 									<div>Nessun risultato per {where}</div>
// 								)