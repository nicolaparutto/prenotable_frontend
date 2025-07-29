import { useParams } from "react-router-dom"

function LocalDetailsPage() {

	const { id } = useParams();

	return (
		<div>Dettagli locale con id: {id}</div>
	)
}

export default LocalDetailsPage