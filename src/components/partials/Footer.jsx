import { Link } from "react-router-dom"

function Footer() {
	return (
		<div className="bg-light-gray text-center py-5 border-t-2 border-yellow">
			<div className="flex justify-center m-auto w-[140px] lg:w-[200px]">
				<Link to="/"><img className="" src="/images/logo.png" alt="" /></Link>
			</div>
			<div>
				<ul className="m-4 md:flex justify-center">
					<li className="my-1 md:mx-4"><a className="py-1 text-md hover:underline" href="#">Ristoranti</a></li>
					<li className="my-1 md:mx-4"><a className="py-1 text-md hover:underline" href="#" >Regioni</a></li>
					<li className="my-1 md:mx-4"><a className="py-1 text-md hover:underline" href="#">Chi Siamo</a></li>
					<li className="my-1 md:mx-4"><a className="py-1 text-md hover:underline" href="#">recensioni</a></li>
				</ul>
				<p className="text-sm text-gray">© 2025 PrenoTable. All rights reserved. Website made by Nicola Parutto.</p>
			</div>
		</div>
	)
}

export default Footer