
//context:
import { useContext, createContext } from "react";
const GlobalContext = createContext();
//custom hooks:
import useGetLocals from "../hooks/useGetLocals";

const GlobalProvider = ({ children }) => {
	// [useGetLocals] HOOK:
	const {
		getAllLocals, allLocals,
		getSearchedLocals, searchedLocals,
	} = useGetLocals();

	//to export:
	const values = {
		getAllLocals, allLocals,
		getSearchedLocals, searchedLocals,
	};
	return (
		<GlobalContext.Provider value={values}>
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider }