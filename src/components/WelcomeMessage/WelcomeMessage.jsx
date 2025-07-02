import "./WelcomeMessage.css";

export const WelcomeMessage = ({ userName }) => {
	return <h5 className="welcome-message">Bienvenido {userName}</h5>;
};
