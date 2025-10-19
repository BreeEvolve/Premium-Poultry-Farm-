import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Heart, Award, Truck, Leaf, MessageCircle } from 'lucide-react';

const App = () => {
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { 
      name: 'Broiler Chickens (Mature)', 
      price: 'KSh 550/bird', 
      icon: '🐔', 
      description: 'Organically reared, ready-to-cook premium broilers with tender meat and excellent flavor' 
    },
    { 
      name: 'Broiler Chicken (2 Weeks)', 
      price: 'KSh 300/chick', 
      icon: '🐣', 
      description: 'Healthy 2-week-old broiler chicks, organically fed and vaccinated for optimal growth' 
    },
    { 
      name: 'Improved Kienyeji (Mature)', 
      price: 'KSh 900/bird', 
      icon: '🐔', 
      description: 'Premium indigenous mature chickens, free-range and organically reared for superior taste and nutrition' 
    },
    { 
      name: 'Improved Kienyeji Chicks (1 Month)', 
      price: 'KSh 350/chick', 
      icon: '🐤', 
      description: 'One-month-old improved kienyeji chicks, hardy and organically raised for excellent disease resistance' 
    },
    { 
      name: 'Ex-Layers Chicken', 
      price: 'KSh 600/bird', 
      icon: '🐔', 
      description: 'Retired layer hens, organically fed and perfect for nutritious stews and traditional recipes' 
    },
    { 
      name: 'Layers Eggs', 
      price: 'KSh 360/tray', 
      icon: '🥚', 
      description: 'Fresh brown eggs from organically fed hens, 30 eggs per tray, rich in nutrients' 
    },
    { 
      name: 'Kienyeji Eggs', 
      price: 'KSh 750/tray', 
      icon: '🥚', 
      description: 'Premium free-range kienyeji eggs from organically reared hens, known for their rich flavor and high nutritional value' 
    },
    { 
      name: 'Organic Poultry Manure', 
      price: 'KSh 500/bag', 
      icon: '🌱', 
      description: 'Premium organic manure from our poultry farm, perfect for gardens and farms, rich in nutrients and completely natural' 
    }
  ];

  const features = [
    { icon: <Leaf className="w-6 h-6" />, title: 'Organically Reared', description: 'All our poultry are raised using organic feed and natural methods' },
    { icon: <Award className="w-6 h-6" />, title: 'Certified Farm', description: 'Licensed and regulated operations with quality assurance' },
    { icon: <Heart className="w-6 h-6" />, title: 'Animal Welfare', description: 'Ethical and humane treatment with spacious free-range areas' },
    { icon: <Truck className="w-6 h-6" />, title: 'Reliable Delivery', description: 'Timely delivery to your location across Kirinyaga and beyond' }
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello,\nWelcome to Premium Poultry Farm.\nKindly let us know how we can be of support, we'll be in touch shortly."
  );
  const whatsappLink = `https://wa.me/254716344046?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">PF</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Premium Poultry Farm</h1>
                <p className="text-sm text-gray-600">Quality Poultry Products</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-gray-700">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Mon-Sat: 8AM-6PM | Sun: 3PM-6PM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-800 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Premium Quality Poultry Products</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fresh, healthy, and ethically raised poultry products from our farm to your table. 
            Located at the beautiful Kirinyaga-Embu border in Piai.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection(productsRef)}
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Products
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Contact Us
            </button>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Farm</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Premium Poultry Farm, your trusted source for high-quality poultry products 
                in the Kirinyaga region. Established with a passion for excellence and sustainable farming 
                practices, we pride ourselves on delivering the freshest and healthiest poultry products 
                to our valued customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our farm is strategically located in Piai, Kirinyaga, right on the scenic Kirinyaga-Embu 
                border. We operate under strict quality control measures and maintain the highest standards 
                of animal welfare, ensuring that every product that leaves our farm meets premium quality 
                expectations. All our poultry are organically reared using natural feed and free-range methods.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-green-600 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🐔</div>
                  <p className="text-xl font-semibold text-gray-800">Premium Poultry Farm</p>
                  <p className="text-gray-600">Piai, Kirinyaga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Fresh, healthy, and competitively priced poultry products for your family and business
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-green-100">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="text-2xl font-bold text-green-700">{product.price}</div>
                </div>
                <div className="flex justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">Available Now</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Order Now via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-700">We'd love to hear from you!</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <div className="space-y-2">
                <p className="text-gray-700">+254 716 344 046</p>
                <p className="text-gray-700">+254 722 350 939</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700 break-words">brendagrace76@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Piai, Kirinyaga<br />Kirinyaga-Embu Border</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Working Hours</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="text-left">
                <p className="font-semibold">Monday - Saturday</p>
                <p>8:00 AM - 6:00 PM</p>
              </div>
              <div className="text-left">
                <p className="font-semibold">Sunday</p>
                <p>3:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">PF</span>
            </div>
            <span className="text-xl font-bold">Premium Poultry Farm</span>
          </div>
          <p className="text-gray-400 mb-4">
            Quality poultry products from the heart of Kirinyaga - All organically reared
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2024 Premium Poultry Farm</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
