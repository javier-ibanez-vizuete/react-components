import { ImageContainer } from "../ImageContainer/ImageContainer";
import "./Avatar.css";

export const Avatar = ({ url, name }) => {
	return (
		<div className="avatar-container">
			<ImageContainer url={url} name={name} />
			<h3>{name}</h3>
		</div>
	);
};
