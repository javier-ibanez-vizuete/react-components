import { UserCard } from "./components/UserCard/UserCard";
import { CustomButton } from "./components/CustomButton/CustomButton";

export const App = () => {
	return (
		<>
			<UserCard name={"Javier"} year={31} city={"Madrid"} />
			<CustomButton text={"Aceptar"} />
		</>
	);
};
