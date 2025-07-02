import "./Product.css";

export const Product = ({ productName, price, productDescription }) => {
	return (
		<div className="product-card">
			<h3>Nombre: {productName}</h3>
			<h2>Precio: {price}</h2>
			<p>
				Descripcion: <span>{productDescription}</span>
			</p>
		</div>
	);
};
