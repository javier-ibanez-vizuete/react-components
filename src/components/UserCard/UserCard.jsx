import './UserCard.css'

export const UserCard = ({name, year, city}) => {
	return (
		<div className="user-card">
			<h3>Nombre:{name}</h3>
			<h3>Edad:{year}</h3>
			<h3>Ciudad:{city}</h3>
		</div>
	);
};