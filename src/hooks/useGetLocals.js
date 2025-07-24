import { useState } from "react"
import axios from "axios";
const apiUrl = "http://localhost:3000"

const useGetLocals = () => {
	//locals STATE:
	const [allLocals, setAllLocals] = useState([]);

	//[Locals Handle Functions]:
	// =====[GET]===== all products:
	const getAllLocals = async () => {
		try {
			const response = await axios.get(`${apiUrl}/locals`);
			setAllLocals(response.data)
		} catch (error) {
			console.error(error)
		}
	}


	//to export:
	return {
		getAllLocals, allLocals, //all locals
	}
}

export default useGetLocals