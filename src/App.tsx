import { FileText, Calculator, Building2, CheckCircle, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Calculator,
      title: "Accounting Services",
      description: "Professional bookkeeping, financial statements, and complete accounting solutions tailored to your business needs."
    },
    {
      icon: FileText,
      title: "Taxation & GST",
      description: "Expert tax planning, GST registration, filing, and compliance services to keep your business tax-efficient."
    },
    {
      icon: Building2,
      title: "Business Registration",
      description: "Complete support for company registration, LLP formation, trademark registration, and business setup."
    }
  ];

  const benefits = [
    "Expert CA & Tax Professionals",
    "100% Compliance Assured",
    "Pan-India Service Network",
    "Transparent Pricing",
    "24/7 Customer Support",
    "Fast Turnaround Time"
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">StreamLine Now</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">Get Started</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Financial Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              We Account for Your Success
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional Accounting, Taxation, GST, and Business Registration services for individuals, startups, and companies across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl">
                Schedule Consultation
              </a>
              <a href="#services" className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-emerald-600">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial and business solutions to help you grow with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition group">
                  <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose StreamLine Now?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a team of experienced Chartered Accountants, Tax Consultants, and Business Advisors committed to providing exceptional financial services across India. Our mission is to simplify your financial operations and ensure complete compliance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-12 rounded-2xl text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">1000+</div>
                  <div className="text-emerald-100 text-lg">Happy Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-emerald-100 text-lg">Expert Professionals</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-emerald-100 text-lg">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to streamline your business? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
              <p className="text-gray-600">info@streamlinenow.com</p>
              <p className="text-gray-600">support@streamlinenow.com</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Location</h3>
              <p className="text-gray-600">Pan-India Services</p>
              <p className="text-gray-600">Head Office: Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold">StreamLine Now</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We Account for Your Success. Professional financial services to help your business thrive.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-emerald-500 transition">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-emerald-500 transition">About Us</a>
                <a href="#contact" className="block text-gray-400 hover:text-emerald-500 transition">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Accounting</p>
                <p className="text-gray-400">Taxation</p>
                <p className="text-gray-400">GST Services</p>
                <p className="text-gray-400">Registration</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StreamLine Now. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
