import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectCategory,setSelectCategory] = useState('All');
  const addToCart = (product) => {
    console.log("Added to cart:", product);
    // TODO: update cart state or send to backend
  };

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("fetchiing products")
      try {
        const res = await fetch("http://localhost:4000/users/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);
console.log(products)
    const filteredProducts =
    selectCategory === "All"
      ? products
      : products.filter((product) => product.category === selectCategory);

      
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Explore our comprehensive collection of premium kitchenware designed for culinary excellence
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button onClick={()=> setSelectCategory('All')} className={`px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-medium transition-all duration-300" ${
            selectCategory === 'All' ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"}`}>
            All Products
          </button>

          <button
            onClick={() => setSelectCategory("Water Bottles")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectCategory === "Water Bottles"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Water Bottles
          </button>

          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            Appliances
          </button>
          
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            Serveware
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-hero">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
