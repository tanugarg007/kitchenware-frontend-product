interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Required<Product>;
}

const ProductCard = ({ product,addToCart }) => {
const imageUrl = product.image.startsWith('http') 
    ? product.image 
    : `http://localhost:4000/uploads/${product.image}`;
  console.log(imageUrl)
  return (
    <div className="card-product group">
      <div className="aspect-square overflow-hidden">
        <img
          src="http://localhost:4000/uploads/coffee beater.jpg"
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            Rs {product.price}
          </span>
          <button className="btn-secondary" type="button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
