import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

function MainLayout() {
	return (
		<>
			<header className="fixed w-full">
				<Header />
			</header>
			<main className="pt-[60px]">
				<Outlet />
			</main>
			<footer className="">
				<Footer />
			</footer>
		</>
	)
}

export default MainLayout