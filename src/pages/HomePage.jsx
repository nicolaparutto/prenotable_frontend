function HomePage() {
	return (
		<>
			<section className="py-[60px] text-center flex flex-col items-center md:py-[100px]">
				<div className="mx-5 mb-2">
					<h1 className="font-title text-xl color-yellow mb-3">Trova il ristorante che cerchi in pochi click...</h1>
					<p className="text-sm">Cerca tra migliaia di ristoranti e locali in tutta italia e trova quello che fa per te.</p>
					<p className="text-sm mt-1">Prenota il tuo tavolo direttamente da qui!</p>
				</div>
				<div className="p-3 inset-1 shadow-2xl w-[320px] md:w-[500px]">
					<input className="w-full border-1 border-yellow rounded-sm p-2 md:w-[70%] md:mr-1" type="text" placeholder="Città, Regione..." />
					<button className="mt-2 bg-yellow py-[6px] px-[30px] rounded-full text-black cursor-pointer md:py-[8px] md:px-[40px] hover:bg-dark-yellow active:bg-dark-yellow">Cerca</button>
				</div>
			</section>
		</>
	)
}

export default HomePage