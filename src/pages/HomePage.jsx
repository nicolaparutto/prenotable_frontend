import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
//components:
import HomeSwiper from "../components/utilities/HomeSwiper"
import RegionCard from "../components/cards/RegionCard"
import LocalCard from "../components/cards/LocalCard"
import { use } from "react"

function HomePage() {
	// states:
	const [searchLocation, setSearchLocation] = useState("");
	const [alertMessage, setAlertMessage] = useState();
	const [randomRegions, setRandomRegions] = useState([]);
	// utilities:
	const navigate = useNavigate();
	const { getRegionsList, regionsList, getAllTypologies, allTypologies } = useGlobalContext();

	// [FUNCTION] for initial random regions:
	const getRandomRegions = () => {
		const randomRegions = [];
		for (let i = 0; i < regionsList.length; i++) {
			const randomIndex = Math.floor(Math.random() * regionsList.length);
			const regionToAdd = regionsList[randomIndex];
			if (!randomRegions.includes(regionToAdd) && randomRegions.length < 5) {
				randomRegions.push(regionToAdd);
			}
		}
		setRandomRegions(randomRegions);
	}
	// [FUNCTION] search by localion:
	const startSearch = (e) => {
		e.preventDefault();
		if (searchLocation.length < 4) {
			setAlertMessage("Inserisci una città o una regione")
			return
		}
		navigate(`/search?where=${encodeURIComponent(searchLocation)}`)
	}

	// useEffect:
	useEffect(() => {
		getRandomRegions();
	}, [regionsList]);
	useEffect(() => {
		getRegionsList();
		getAllTypologies();
	}, []);
	return (
		<>
			{/* 1 Section */}
			<section className="py-[60px] text-center flex flex-col items-center md:py-[100px] lg:py-[180px]">
				<div className="mx-5 mb-2">
					<h1 className="font-title text-xl md:text-xxl text-dark mb-3">Trova il ristorante che cerchi in pochi click...</h1>
					<p className="text-sm md:text-md">Cerca tra migliaia di ristoranti e locali in tutta italia e trova quello che fa per te.</p>
					<p className="text-sm mt-1 md:text-md">Prenota il tuo tavolo direttamente da qui!</p>
				</div>
				<div className="p-3 inset-1 shadow-2xl w-[320px] md:w-[500px]">
					<form onSubmit={e => startSearch(e)}>
						<input className="w-full border-1 border-yellow rounded-sm p-2 md:w-[70%] md:mr-1" type="text" placeholder="Città, Regione..." value={searchLocation} onChange={e => setSearchLocation(e.target.value)} />
						{alertMessage ? <p className="text-red-400 text-sm mt-1 block md:hidden">{alertMessage}</p> : ""}
						<button className="mt-2 bg-yellow py-[6px] px-[30px] rounded-full text-black cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-yellow active:bg-dark-yellow" type="submit">Cerca</button>
						{alertMessage ? <p className="text-red-400 text-sm mt-1 hidden md:block">{alertMessage}</p> : ""}
					</form>
				</div>
			</section >
			{/* 2 Section */}
			<section className="bg-light-gray md:hidden" >
				<HomeSwiper />
			</section >
			<section className="py-[50px] hidden md:block bg-light-gray text-center">
				<h4 className='text-md text-gray'>Come Funziona?</h4>
				<h1 className='font-title text-xl md:text-xxl text-yellow'>È molto semplice!</h1>
				<div className="flex m-auto container justify-around">
					<div className="lg:w-[300px] md:w-[250px]">
						<div className='text-yellow text-[70px]'>
							<i className="fa-solid fa-location-dot"></i>
						</div>
						<h2 className='text-lg'>Scegli la regione o la città</h2>
						<p className='text-md text-gray'>Ti mostreremo i locali e i ristoranti della zona indicata.</p>
					</div>
					<div className="lg:w-[300px]  md:w-[250px]">
						<div className='text-yellow text-[70px]'>
							<i className="fa-solid fa-utensils"></i>
						</div>
						<h2 className='text-lg'>Scegli quello che desideri</h2>
						<p className='text-md text-gray'>Sfoglia i ristoranti, in base alle tue preferenze.</p>
					</div>
					<div className="lg:w-[300px]  md:w-[250px]">
						<div className='text-yellow text-[70px]'>
							<i className="fa-solid fa-calendar-check"></i>
						</div>
						<h2 className='text-lg'>Prenota il tuo tavolo</h2>
						<p className='text-md text-gray'>Prenota direttamente qui, se è disponibile.</p>
					</div>
				</div>
			</section>
			{/* 3 Section */}
			<section className="py-[50px] bg-yellow text-center">
				<h1 className="font-title text-xl md:text-xxl text-dark mb-2">Esplora per regione</h1>
				<p className="text-sm md:text-md ">trova il ristorante che cercavi direttamente nella regione</p>
				<div className="flex justify-center my-5">
					<div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{randomRegions.map(region => (
							<RegionCard key={region.region_id} regionData={region} />
						))}
					</div>
				</div>
				<button className="mt-2 bg-main-gray py-[6px] px-[30px] rounded-full text-white cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-dark active:bg-dark-dark">Vedi tutte</button>
			</section >
			{/* 4 Section */}
			<section className="py-[50px] text-center">
				<h1 className="font-title text-xl md:text-xxl text-dark mb-2">ristoranti più popolari</h1>
				<p className="text-sm md:text-md ">Scopri i 10 ristoranti meglio recensiti nella piattaforma</p>
				<div className="flex justify-center my-5">
					<div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						<LocalCard />
						<LocalCard />
						<LocalCard />
						<LocalCard />
					</div>
				</div>
				<button className="mt-2 bg-yellow py-[6px] px-[30px] rounded-full text-dark cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-yellow active:bg-dark-yellow">Top 10</button>
			</section>
		</>
	)
}

export default HomePage




/*
Logica per stampare 6 regioni / 4 locali casuali:

Al caricamento della home io ho ottenuto la lista intera delle regioni, 
e la lista intera dei locali top 10.

Faccio in modo di salvare in un nuovo array (initialRegions | initialLocalsTop) 
6/4 elementi ad indice casuale contenuti nell'array iniziale con math random.

Quindi ho due array che mi mappati stampano 6/4 card.

Al click dei pulsanti vedi top10 o vedi tutte le regioni, 
si apre un modal tutto schermo con la lista intera di regioni o locali.
*/