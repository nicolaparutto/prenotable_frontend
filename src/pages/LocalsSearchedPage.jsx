import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
function LocalsSearchedPage() {
	const { getSearchedLocals, searchedLocals } = useGlobalContext();

	const [searchParams] = useSearchParams();
	const where = searchParams.get('where');

	//dynamic params for search:
	const params = {
		where: where
	};

	useEffect(() => {
		//getSearchedLocals(params)
	}, [where]);
	return (
		<div>
			LocalsSearchedPage
		</div>
	)
}

export default LocalsSearchedPage