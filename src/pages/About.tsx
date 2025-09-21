const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About KitchenCraft
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Crafting Excellence in Every Kitchen Since 2010
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="gradient-hero rounded-2xl p-8 md:p-12 mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              KitchenCraft was born from a simple belief: every home cook deserves access to professional-grade 
              kitchenware that combines functionality, durability, and beautiful design. Founded by culinary 
              enthusiasts who understood the frustration of working with subpar tools, we set out to create 
              a collection that would inspire confidence in every kitchen.
            </p>
            <p className="text-lg text-muted-foreground">
              What started as a small family business has grown into a trusted brand, serving thousands of 
              passionate cooks worldwide. Every product in our collection is carefully selected and tested 
              to meet our rigorous standards for quality and performance.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 card-product animate-bounce-in">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-primary-foreground">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              We never compromise on quality. Every product is rigorously tested to ensure it meets our 
              high standards for durability and performance.
            </p>
          </div>

          <div className="text-center p-6 card-product animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-accent-foreground">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
            <p className="text-muted-foreground">
              We're committed to sustainable practices, from eco-friendly packaging to partnering with 
              manufacturers who share our environmental values.
            </p>
          </div>

          <div className="text-center p-6 card-product animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-primary-foreground">❤️</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
            <p className="text-muted-foreground">
              Your satisfaction is our priority. We provide exceptional customer service and stand behind 
              every product we sell with comprehensive warranties.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
            To empower home cooks and professional chefs alike with premium kitchenware that enhances 
            creativity, efficiency, and joy in cooking. We believe that great tools inspire great food, 
            and great food brings people together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="btn-hero">
              Explore Our Products
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;