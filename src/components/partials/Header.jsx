import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchLocal, setSearchLocal] = useState();

	//search by local:
	const startSearch = (e) => {
		e.preventDefault();
		setSearchOpen(false);
		console.log("Cerca il locale: ", searchLocal);
	}

	return (
		<div className="relative bg-white">
			<div className="py-1 px-3 flex justify-between items-center shadow-md">
				<div className="w-[120px]">
					<Link to="/"><img src="/images/logo.png" alt="" /></Link>
				</div>
				<div className="hidden md:block">
					<ul className="flex">
						<li><a className="px-3 py-2 hover:underline cursor-pointer" href="#">Ristoranti</a></li>
						<li><a className="px-3 py-2 hover:underline cursor-pointer" href="#">Regioni</a></li>
						<li><a className="px-3 py-2 hover:underline cursor-pointer" href="#">Chi Siamo</a></li>
						<li><a className="px-3 py-2 hover:underline cursor-pointer" href="#">Recensioni</a></li>
					</ul>
				</div>
				<div className="hidden md:block border-b-2 border-yellow">
					<input className="" type="text" placeholder="Cerca Ristorante..." />
				</div>
				<div className="text-yellow md:hidden">
					<button className="px-3 py-1 text-[24px]" onClick={() => setSearchOpen(!searchOpen)}><i className="fa-solid fa-magnifying-glass"></i></button>
					<button className="px-3 py-1 text-[28px]" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <i className="fa-solid fa-square-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
				</div>
			</div>
			<div className={`bg-yellow text-center py-3 absolute left-0 top-full w-full shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
				<ul>
					<li><a className="block p-2 active:underline" href="#">Ristoranti</a></li>
					<li><a className="block p-2 active:underline" href="#">Regioni</a></li>
					<li><a className="block p-2 active:underline" href="#">Chi Siamo</a></li>
					<li><a className="block p-2 active:underline" href="#">Recensioni</a></li>
				</ul>
			</div>
			<div className={`bg-light-gray p-1 absolute left-0 top-full w-full shadow-md transition-all duration-300 ease-in-out ${searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
				<form onSubmit={e => startSearch(e)}>
					<input className="w-full p-3" type="text" placeholder="Cerca Ristorante..." onChange={e => setSearchLocal(e.target.value)} />
				</form>
			</div>
		</div>
	)
}

export default Header