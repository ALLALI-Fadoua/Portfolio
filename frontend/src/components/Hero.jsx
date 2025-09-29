import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV-ALLALI Fadoua.pdf';
    link.download = 'CV-ALLALI Fadoua.pdf';
    link.click();
  };

  return (
    <section id="home" className="h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        
        {/* Container principal avec flexbox vertical */}
        <div className="h-full flex flex-col justify-center">
          
          {/* Top Section - 2 Colonnes */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full mb-12">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium border border-orange-600/20">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Hi, I'm
                  </h1>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-950 to-orange-600 bg-clip-text text-transparent mb-4 leading-tight">
                    ALLALI Fadoua
                  </h2>
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-700 leading-relaxed">
                  Web Developer from Algeria, passionate about building{' '}
                  <span className="text-orange-600 font-semibold">smart</span> and{' '}
                  <span className="text-blue-950 dark:text-blue-400 font-semibold">creative</span> digital solutions.
                </p>


              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-950/20 to-orange-600/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-950/10 rounded-full"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-950 to-orange-600 p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-inner">
                      <span className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-blue-950 to-orange-600 bg-clip-text text-transparent font-dancing">
                        alfa
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Available for work
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Quote + CTA Buttons */}
          <div className="flex flex-col items-center gap-6">            
            {/* Buttons en bottom */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-blue-950 text-white rounded-xl hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowDown size={20} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              
              <button
                onClick={handleDownload}
                className="group px-8 py-4 border-2 border-blue-950 text-blue-950 bg-white hover:bg-blue-950 hover:text-white rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold relative overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
                <Download size={20} className="relative z-10 group-hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;