import ProductCard from '../components/ProductCard';
import waterBottleImage from '../assets/water-bottle.jpg';
import gasStoveImage from '../assets/gas-stove.jpg';
import jugImage from '../assets/jug.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Water Bottle',
      price: '$29.99',
      image: waterBottleImage,
      description: 'Insulated stainless steel bottle keeps drinks at perfect temperature.'
    },
    {
      id: 2,
      name: 'Professional Gas Stove',
      price: '$599.99',
      image: gasStoveImage,
      description: 'High-efficiency gas stove with precise flame control for perfect cooking.'
    },
    {
      id: 3,
      name: 'Ceramic Jug',
      price: '$45.99',
      image: jugImage,
      description: 'Elegant ceramic jug perfect for serving beverages in style.'
    },
    {
      id: 4,
      name: 'Deluxe Water Bottle Set',
      price: '$79.99',
      image: waterBottleImage,
      description: 'Complete set of premium bottles for the whole family.'
    },
    {
      id: 5,
      name: 'Professional Kitchen Set',
      price: '$1299.99',
      image: gasStoveImage,
      description: 'Complete professional-grade kitchen appliance collection.'
    },
    {
      id: 6,
      name: 'Artisan Jug Collection',
      price: '$129.99',
      image: jugImage,
      description: 'Beautiful handcrafted ceramic jug collection in various sizes.'
    }
  ];

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
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-medium transition-all duration-300">
            All Products
          </button>
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
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
          {products.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
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