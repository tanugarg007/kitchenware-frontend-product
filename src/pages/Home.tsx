import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import heroImage from '../assets/hero-kitchen.jpg';

import { useState, useEffect } from 'react';
const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
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
        setFeaturedProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Premium
            <span className="gradient-primary bg-clip-text text-transparent block">
              Kitchenware
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            Elevate your culinary experience with our premium collection of kitchen essentials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Link to="/products" className="btn-hero">
              Shop Now
            </Link>
            <Link to="/about" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20">
              Learn More
            </Link>
          </div>
        </div>
      </section>

     
      {/* Featured Products Section */}
<section className="py-20 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Featured Products
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Discover our handpicked selection of premium kitchenware designed to inspire your culinary journey
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.slice(0, 3).map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={() => console.log('Add to cart:', product)} 
        />
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/products" className="btn-hero">
        View All Products
      </Link>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who have elevated their cooking experience with our premium kitchenware
          </p>
          <Link to="/products" className="btn-hero">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
