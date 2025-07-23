import HomeSwiper from "../components/utilities/HomeSwiper"
import RegionCard from "../components/cards/RegionCard"

function HomePage() {
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
					<input className="w-full border-1 border-yellow rounded-sm p-2 md:w-[70%] md:mr-1" type="text" placeholder="Città, Regione..." />
					<button className="mt-2 bg-yellow py-[6px] px-[30px] rounded-full text-black cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-yellow active:bg-dark-yellow">Cerca</button>
				</div>
			</section>
			{/* 2 Section */}
			<section className="bg-light-gray md:hidden">
				<HomeSwiper />
			</section>
			<section className="py-[50px] hidden md:block bg-light-gray text-center">
				<h4 className='text-md text-gray'>Come Funziona?</h4>
				<h1 className='font-title text-xl md:text-xxl text-yellow'>È molto semplice!</h1>
				<div className="flex m-auto container justify-around">
					<div className="lg:w-[300px] md:w-[250px]">
						<div className='text-yellow text-[70px]'>
							<i class="fa-solid fa-location-dot"></i>
						</div>
						<h2 className='text-lg'>Scegli la regione o la città</h2>
						<p className='text-md text-gray'>Ti mostreremo i locali e i ristoranti della zona indicata.</p>
					</div>
					<div className="lg:w-[300px]  md:w-[250px]">
						<div className='text-yellow text-[70px]'>
							<i class="fa-solid fa-utensils"></i>
						</div>
						<h2 className='text-lg'>Scegli quello che desideri</h2>
						<p className='text-md text-gray'>Sfoglia i ristoranti, in base alle tue preferenze.</p>
					</div>
					<div className="lg:w-[300px]  md:w-[250px]">
						<div className='text-yellow text-[70px]'>
							<i class="fa-solid fa-calendar-check"></i>
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
				<div className="flex justify-center my-3 sm:hidden">
					<RegionCard />
				</div>
				<div className="hidden sm:flex justify-around my-3 lg:hidden">
					<RegionCard />
					<RegionCard />
				</div>
				<div className="hidden lg:flex justify-around my-8 xl:hidden">
					<RegionCard />
					<RegionCard />
					<RegionCard />
					<RegionCard />
				</div>
				<div className="hidden xl:flex justify-around my-8">
					<RegionCard />
					<RegionCard />
					<RegionCard />
					<RegionCard />
					<RegionCard />
				</div>
				<button className="mt-2 bg-main-gray py-[6px] px-[30px] rounded-full text-white cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-dark active:bg-dark-dark">Vedi tutte</button>
			</section >
			{/* 4 Section */}
		</>
	)
}

export default HomePage