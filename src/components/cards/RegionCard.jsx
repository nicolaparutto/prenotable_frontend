function RegionCard({ regionData }) {

	const { region_name, total_locals, image_path } = regionData;

	return (
		<div className="w-[200px] md:w-[180px] xl:w-[200px]">
			<div>
				<img src={`/images/regions/${image_path}`} alt="" />
			</div>
			<div className="bg-white p-3">
				<h2 className='text-lg text-dark'>{region_name}</h2>
				<p className="text-sm md:text-md">{total_locals} Locali</p>
			</div>
		</div>
	)
}

export default RegionCard