import { UserCard } from "./components/UserCard/UserCard";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { Avatar } from "./components/Avatar/Avatar";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { Product } from "./components/Product/Product";

export const App = () => {
	return (
		<>
			<UserCard name={"Javier"} year={31} city={"Madrid"} />
			<CustomButton text={"Aceptar"} />
			<Avatar url={"/src/media/images/draco-sunshine.jpg"} name={"Draco"} />
			<WelcomeMessage userName={"Pedro"} />
			<Product productName={"Funko-Pop"} price={30} productDescription={"Muñequito Cabezon"} />
		</>
	);
};
