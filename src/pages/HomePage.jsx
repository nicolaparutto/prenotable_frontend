import HomeSwiper from "../components/utilities/HomeSwiper"

function HomePage() {
	return (
		<>
			<section className="py-[60px] text-center flex flex-col items-center md:py-[100px] lg:py-[180px]">
				<div className="mx-5 mb-2">
					<h1 className="font-title text-xxl color-yellow mb-3">Trova il ristorante che cerchi in pochi click...</h1>
					<p className="text-sm md:text-md">Cerca tra migliaia di ristoranti e locali in tutta italia e trova quello che fa per te.</p>
					<p className="text-sm mt-1 md:text-md">Prenota il tuo tavolo direttamente da qui!</p>
				</div>
				<div className="p-3 inset-1 shadow-2xl w-[320px] md:w-[500px]">
					<input className="w-full border-1 border-yellow rounded-sm p-2 md:w-[70%] md:mr-1" type="text" placeholder="Città, Regione..." />
					<button className="mt-2 bg-yellow py-[6px] px-[30px] rounded-full text-black cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-yellow active:bg-dark-yellow">Cerca</button>
				</div>
			</section>
			<section className="bg-light-gray md:hidden">
				<HomeSwiper />
			</section>
			<section className="hidden md:block bg-light-gray py-[50px] text-center">
				<h4 className='text-md text-gray'>Come Funziona?</h4>
				<h2 className='text-xxl font-title text-yellow'>È molto semplice!</h2>
				<div className="flex m-auto container justify-around">
					<div className="w-[300px]">
						<div className='text-yellow text-[70px]'>
							<i class="fa-solid fa-location-dot"></i>
						</div>
						<h3 className='text-lg'>Scegli la regione o la città</h3>
						<p className='text-md text-gray'>Ti mostreremo i locali e i ristoranti della zona indicata.</p>
					</div>
					<div className="w-[300px]">
						<div className='text-yellow text-[70px]'>
							<i class="fa-solid fa-utensils"></i>
						</div>
						<h3 className='text-lg'>Scegli quello che desideri</h3>
						<p className='text-md text-gray'>Sfoglia i ristoranti, in base alle tue preferenze.</p>
					</div>
					<div className="w-[300px]">
						<div className='text-yellow text-[70px]'>
							<i class="fa-solid fa-calendar-check"></i>
						</div>
						<h3 className='text-lg'>Prenota il tuo tavolo</h3>
						<p className='text-md text-gray'>Prenota direttamente qui, se è disponibile.</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage