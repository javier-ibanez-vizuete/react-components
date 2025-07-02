import "./Alert.css";

export const Alert = ({ type, message }) => {
	if (!message) {
		return null;
	}
	return <h2 className={type ? `${type}-alert-message alert-message` : "h2-alert-message"}>{message}</h2>;
};
