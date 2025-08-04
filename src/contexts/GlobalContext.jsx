//context:
import { useContext, createContext } from "react";
const GlobalContext = createContext();
//custom hooks:
import useGetLocals from "../hooks/useGetLocals";
import useGetUtilities from "../hooks/useGetUtilities";
//==========================================================================
const GlobalProvider = ({ children }) => {
	// [useGetLocals] HOOK:
	const {
		getAllLocals, allLocals,
		getSearchedLocals, searchedLocals,
	} = useGetLocals();
	// [useGetUtilities] HOOK:
	const {
		getRegionsList, regionsList,
		getAllTypologies, allTypologies
	} = useGetUtilities();

	//________________________________________________________________________
	//to export:
	const values = {
		// locals:
		getAllLocals, allLocals,
		getSearchedLocals, searchedLocals,
		// utilities:
		getRegionsList, regionsList,
		getAllTypologies, allTypologies
	};
	return (
		<GlobalContext.Provider value={values}>
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider }