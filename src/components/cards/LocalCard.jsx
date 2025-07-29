import { useNavigate } from "react-router-dom";

function LocalCard({ localData = {} }) {
	const { id, title, city, address, average_rating, price, example, initialDescription, typologies } = localData;
	const navigate = useNavigate();
	const seeLocal = (id) => {
		console.log("voglio vedere il locale con id ", id);
		navigate(`/local/${id}`)
	}

	return (
		<div className="w-[300px] sm:w-[260px] md:w-[260px] xl:w-[300px] flex flex-col h-full bg-light-gray  shadow-xl overflow-hidden">
			<div>
				<img src="/images/placeholder.jpeg" alt="" />
			</div>
			<div className="bg-light-gray p-3">
				<div className="flex items-center justify-between">
					<h2 className='text-md truncate'>{title}</h2>
					<div>
						<span className="text-sm pr-1">⭐️⭐️⭐️⭐️⭐️</span>
						<span className="text-sm">{average_rating}</span>
					</div>
				</div>
				<p className="text-sm text-gray">{`${city}, ${address}`}</p>
				<p className="text-sm">{initialDescription}</p>
				<div className="flex items-center justify-between">
					<span className="block text-sm">{`${price} - ${example}`}</span>
					<button className="bg-yellow py-[4px] px-[18px] rounded-md text-black cursor-pointer md:py-[5px] md:px-[22px] hover:bg-dark-yellow active:bg-dark-yellow" onClick={() => seeLocal(id)}>Vedi</button>
				</div>
			</div>
		</div>
	)
}

export default LocalCard