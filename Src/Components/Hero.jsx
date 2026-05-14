export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center overflow-hidden">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')] bg-cover bg-center opacity-20 animate-pulse"></div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-[fade-in-up_0.8s_ease-out]">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm">
            🎬 Now Streaming
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
          Unlimited Movies
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Watch trending movies anytime, anywhere. 
          <span className="block text-red-500 text-lg mt-2">Start your free trial today →</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
            View Plans →
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <span>4K + HDR</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <span>Dolby Atmos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <span>No Ads</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <span>Offline Viewing</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}