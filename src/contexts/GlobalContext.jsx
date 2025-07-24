import { useContext, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

	//.....

	//to export:
	const values = {};
	return (
		<GlobalContext.Provider value={values}>
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider }