import "./FamousQuote.css";

export const FamousQuote = ({ quote, author }) => {
	return (
		<div className="famousquote-container">
			<p>{quote}</p>
			<h5>
				Escrita por <span>{author}</span>
			</h5>
		</div>
	);
};
