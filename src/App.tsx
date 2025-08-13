import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Users, TrendingUp, Smartphone, FileText, BarChart3, DollarSign, Zap, Home } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-[#f0f0ea] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src={scrollY > 50 ? "/logo_dark.png" : "/logo_light.png"} 
                  alt="AudioSight" 
                  className="h-12 w-auto transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className={`px-3 py-2 text-sm font-medium transition-colors ${scrollY > 50 ? 'text-[#032d4f] hover:text-[#95b1ee]' : 'text-white hover:text-[#95b1ee]'}`}>Home</a>
                <a href="#why" className={`px-3 py-2 text-sm font-medium transition-colors ${scrollY > 50 ? 'text-[#032d4f]/80 hover:text-[#95b1ee]' : 'text-white/90 hover:text-[#95b1ee]'}`}>Why It Matters</a>
                <a href="#solution" className={`px-3 py-2 text-sm font-medium transition-colors ${scrollY > 50 ? 'text-[#032d4f]/80 hover:text-[#95b1ee]' : 'text-white/90 hover:text-[#95b1ee]'}`}>Our Solution</a>
                <a href="#benefits" className={`px-3 py-2 text-sm font-medium transition-colors ${scrollY > 50 ? 'text-[#032d4f]/80 hover:text-[#95b1ee]' : 'text-white/90 hover:text-[#95b1ee]'}`}>Key Benefits</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSefoPfNw_EgICDDiSPj_fE_V48oujlK7JKjVndEYlHPVXmqkQ/viewform" target="_blank" rel="noopener noreferrer" className={`px-6 py-2 rounded-full transition-colors ${scrollY > 50 ? 'bg-[#95b1ee] text-[#032d4f] hover:bg-[#95b1ee]/80' : 'bg-[#95b1ee] text-[#032d4f] hover:bg-[#95b1ee]/90'}`}>Join Waitlist</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none transition-colors ${scrollY > 50 ? 'text-[#032d4f] hover:text-[#95b1ee]' : 'text-white hover:text-[#95b1ee]'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#f0f0ea]/95 backdrop-blur-md shadow-lg border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-[#032d4f] hover:text-[#95b1ee] hover:bg-[#95b1ee]/10 rounded-lg transition-colors">Home</a>
              <a href="#why" className="block px-3 py-2 text-[#032d4f]/80 hover:text-[#95b1ee] hover:bg-[#95b1ee]/10 rounded-lg transition-colors">Why It Matters</a>
              <a href="#solution" className="block px-3 py-2 text-[#032d4f]/80 hover:text-[#95b1ee] hover:bg-[#95b1ee]/10 rounded-lg transition-colors">Our Solution</a>
              <a href="#benefits" className="block px-3 py-2 text-[#032d4f]/80 hover:text-[#95b1ee] hover:bg-[#95b1ee]/10 rounded-lg transition-colors">Key Benefits</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSefoPfNw_EgICDDiSPj_fE_V48oujlK7JKjVndEYlHPVXmqkQ/viewform" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 bg-[#95b1ee] text-[#032d4f] hover:bg-[#95b1ee]/80 rounded-lg transition-colors mx-3 text-center">Join Waitlist</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#032d4f]">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center mb-6">
            <img 
              src="/logo_light.png" 
              alt="AudioSight" 
              className="h-24 md:h-32 w-auto mb-6"
            />
            
          
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-medium">
            AI-Powered HearingTech for Aging Well
          </p>
          </div>
          
          <div className="space-x-4">
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSefoPfNw_EgICDDiSPj_fE_V48oujlK7JKjVndEYlHPVXmqkQ/viewform', '_blank')}
              className="bg-[#95b1ee] text-[#032d4f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#95b1ee]/90 transition-all transform hover:scale-105 inline-flex items-center"
            >
              Join the Waitlist <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why" className="py-20 bg-[#f0f0ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#032d4f] mb-6">Why It Matters</h2>
            <p className="text-xl text-[#032d4f]/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Millions experience hearing loss as they age. Early detection makes a difference, but access is often limited.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#95b1ee]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#032d4f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#032d4f] mb-4">466 Million</h3>
              <p className="text-[#032d4f]/70 leading-relaxed">
                People worldwide have disabling hearing loss, with numbers rising as populations age.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#95b1ee]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[#032d4f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#032d4f] mb-4">Early Detection</h3>
              <p className="text-[#032d4f]/70 leading-relaxed">
                Critical for preventing further loss and maintaining quality of life, but often delayed.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#95b1ee]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-[#032d4f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#032d4f] mb-4">Limited Access</h3>
              <p className="text-[#032d4f]/70 leading-relaxed">
                Traditional testing is expensive and inconvenient, creating barriers to regular monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-[#f0f0ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-24 h-px bg-[#95b1ee] mx-auto"></div>
        </div>
      </div>

      {/* Our Solution Section */}
      <section id="solution" className="py-20 bg-[#f0f0ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#032d4f] mb-6">Our Solution</h2>
            <p className="text-xl text-[#032d4f]/70 max-w-3xl mx-auto leading-relaxed mb-4">
              A compact smartphone attachment + AI analysis that helps individuals and caregivers:
            </p>
            <div className="w-24 h-1 bg-[#95b1ee] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-[#95b1ee]/15 p-8 rounded-2xl hover:bg-[#95b1ee]/25 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#032d4f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#032d4f] mb-4">Screen at Home</h3>
                <p className="text-[#032d4f]/70 leading-relaxed">
                  Convenient hearing health screening from the comfort of your own home, anytime you need it.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#95b1ee]/15 p-8 rounded-2xl hover:bg-[#95b1ee]/25 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#032d4f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#032d4f] mb-4">Easy Reports</h3>
                <p className="text-[#032d4f]/70 leading-relaxed">
                  Generate clear, professional reports that you can easily share with healthcare providers.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#95b1ee]/15 p-8 rounded-2xl hover:bg-[#95b1ee]/25 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#032d4f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#032d4f] mb-4">Track Progress</h3>
                <p className="text-[#032d4f]/70 leading-relaxed">
                  Monitor changes in your hearing health over time with detailed analytics and trends.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-[#032d4f] text-white px-8 py-4 rounded-full text-lg font-semibold">
              <Smartphone className="w-6 h-6 mr-3" />
              Smartphone Attachment + AI Analysis
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-20 bg-[#032d4f] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Benefits</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the future of accessible hearing health technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#95b1ee] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Affordable</h3>
                <div className="text-[#95b1ee] text-3xl font-bold mb-2">10-40x</div>
                <p className="text-white/80 leading-relaxed">
                  Lower cost than traditional devices, making hearing health accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#95b1ee] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Simple</h3>
                <div className="text-[#95b1ee] text-lg font-semibold mb-2">Plug & Scan</div>
                <p className="text-white/80 leading-relaxed">
                  Easy to use interface with no special training required. Just attach and test.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#95b1ee] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Accessible</h3>
                <div className="text-[#95b1ee] text-lg font-semibold mb-2">Anytime, Anywhere</div>
                <p className="text-white/80 leading-relaxed">
                  Test your hearing from the comfort of home, eliminating travel and appointment barriers.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-block bg-[#95b1ee] text-[#032d4f] px-8 py-3 rounded-full text-lg font-bold">
              Revolutionizing Hearing Health Access
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#f0f0ea] rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#032d4f] mb-6">Be the First to Know</h2>
            <p className="text-xl text-[#032d4f]/70 mb-8 max-w-2xl mx-auto">
              Sign up to get early access and updates.
            </p>
            
            <div className="max-w-md mx-auto">
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSefoPfNw_EgICDDiSPj_fE_V48oujlK7JKjVndEYlHPVXmqkQ/viewform', '_blank')}
                className="bg-[#032d4f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#032d4f]/90 transition-all transform hover:scale-105 inline-flex items-center"
              >
                Join the Waitlist <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032d4f] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/logo_light.png" 
                alt="AudioSight" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-8">AI-Powered HearingTech for Aging Well</p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">© 2025 AudioSight. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;