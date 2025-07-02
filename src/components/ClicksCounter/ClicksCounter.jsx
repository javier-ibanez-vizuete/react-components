import "./ClicksCounter.css";

export const ClicksCounter = ({ clickNumber }) => {
	return (
		<div className="clicks-number-container">
			<p>Numero de Clicks</p>
			<h2>{clickNumber}</h2>
			<button>Incrementar</button>
		</div>
	);
};
