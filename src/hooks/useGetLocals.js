import { useState } from "react"
import axios from "axios";
const apiUrl = "http://localhost:3000"

const useGetLocals = () => {
	//locals STATE:
	const [allLocals, setAllLocals] = useState([]);
	const [searchedLocals, setSearchedLocals] = useState([]);

	//[Locals Handle Functions]:
	// =====[GET]===== all locals:
	const getAllLocals = async () => {
		try {
			const response = await axios.get(`${apiUrl}/locals`);
			setAllLocals(response.data)
		} catch (error) {
			console.error(error)
		}
	}
	// =====[GET]===== searched locals:
	const getSearchedLocals = async (params) => {
		const { where, price, typologies, province, rating } = params;
		let urlToAdd = []
		if (where) {
			urlToAdd.push(`&where=${where}`)
		}
		if (price) {
			urlToAdd.push(`&price=${price}`)
		}
		if (typologies) {
			urlToAdd.push(`&typologies=${typologies}`)
		}
		if (province) {
			urlToAdd.push(`&province=${province}`)
		}
		if (rating) {
			urlToAdd.push(`&rating=${rating}`)
		}
		const completedApiUrl = `${apiUrl}/locals/search?${urlToAdd.length > 0 ? `/${urlToAdd}` : ""}`;
		try {
			const response = await axios.get(completedApiUrl);
			setSearchedLocals(response.data)
			console.log(searchedLocals);
		} catch (error) {
			console.error(error)
		}
	}
	//to export:
	return {
		getAllLocals, allLocals, //all locals
		getSearchedLocals, searchedLocals, //searched locals
	}
}

export default useGetLocals