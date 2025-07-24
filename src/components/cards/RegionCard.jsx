function RegionCard() {
	return (
		<div className="w-[200px] md:w-[180px] xl:w-[200px]">
			<div>
				<img src="/images/placeholder.jpeg" alt="" />
			</div>
			<div className="bg-white p-3">
				<h2 className='text-lg text-dark'>Toscana</h2>
				<p className="text-sm md:text-md">123 Ristoranti</p>
			</div>
		</div>
	)
}

export default RegionCard