import { UserCard } from "./components/UserCard/UserCard";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { Avatar } from "./components/Avatar/Avatar";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { Product } from "./components/Product/Product";
import { Alert } from "./components/Alert/Alert";
import { ClicksCounter } from "./components/ClicksCounter/ClicksCounter";
import { FamousQuote } from "./components/FamousQuote/FamousQuote";

export const App = () => {
	return (
		<>
			<UserCard name={"Javier"} year={31} city={"Madrid"} />
			<CustomButton text={"Aceptar"} />
			<Avatar url={"/src/media/images/draco-sunshine.jpg"} name={"Draco"} />
			<WelcomeMessage userName={"Pedro"} />
			<Product productName={"Funko-Pop"} price={30} productDescription={"Muñequito Cabezon"} />
			<Alert type={"error"} message={"Error Garrafal"} />
			<Alert type={"info"} message={"Este es un mensaje de informacion"} />
			<Alert type={"exito"} message={"Triunfazo"} />
			<Alert type={"exito"} message={""} />
			<ClicksCounter clickNumber={12} />
			<FamousQuote quote={"No hay mejor Viagra que cambiar de Cabra"} author={"Javier Siclaro"} />
		</>
	);
};
