function LocalCard() {
	return (
		<div className="w-[280px] sm:w-[260px] xl:w-[280px] text-left">
			<div>
				<img src="/images/placeholder.jpeg" alt="" />
			</div>
			<div className="bg-light-gray p-3">
				<div className="flex items-center justify-between">
					<h2 className='text-md'>Pizzeria Vesuvio</h2>
					<div>
						<span className="text-sm pr-1">⭐️⭐️⭐️⭐️⭐️</span>
						<span className="text-sm">5.0</span>
					</div>
				</div>
				<p className="text-sm text-gray">Napoli, Via Partenope 22</p>
				<p className="text-sm">La vera pizza napoletana cotta nel forno a legna.</p>
				<div className="flex items-center justify-between">
					<span className="block text-sm">€€ - Medio</span>
					<button className="bg-yellow py-[4px] px-[18px] rounded-md text-black cursor-pointer md:py-[5px] md:px-[22px] hover:bg-dark-yellow active:bg-dark-yellow">Cerca</button>
				</div>
			</div>
		</div>
	)
}

export default LocalCard