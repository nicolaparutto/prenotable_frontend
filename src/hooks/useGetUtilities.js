import axios from "axios";
import { useState } from "react";
const apiUrl = "http://localhost:3000";

const useGetUtilities = () => {
	//STATES:
	const [regionsList, setRegionsList] = useState([]);
	const [allTypologies, setAllTypologies] = useState([]);

	//[Utilities Handle Functions]:
	// =====[GET]===== all regions:
	const getRegionsList = async () => {
		try {
			const response = await axios.get(`${apiUrl}/utilities/regions`);
			setRegionsList(response.data);
		} catch (error) {
			console.error(error);
		}
	}
	// =====[GET]===== all locals typologies:
	const getAllTypologies = async () => {
		try {
			const response = await axios.get(`${apiUrl}/utilities/typologies`);
			setAllTypologies(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	return {
		getRegionsList, regionsList,
		getAllTypologies, allTypologies
	}
}

export default useGetUtilities;