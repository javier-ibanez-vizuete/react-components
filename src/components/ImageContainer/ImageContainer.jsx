import "./Imagecontainer.css";

export const ImageContainer = ({ url, name }) => {
	return (
		<div className="image-container">
			<img src={url} alt={name} />
		</div>
	);
};
