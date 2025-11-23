import { useState } from "react";
import hero from '/hero2.jpg';
import hero1 from '/hero1.jpg';
import hero3 from '/hero3.jpg';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section 
      id="about" 
      className="flex items-center justify-center min-h-screen px-4 py-16 text-white sm:px-6"
    >
      <div 
        className="grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2"
      >

        {/* ==== Images ==== */}
        <figure 
          data-aos="fade-left" 
          data-aos-delay='500'
          className="flex items-center justify-center w-full"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">

            {/* Oval gradient shape - mobile fixed */}
            <div 
              className="w-64 h-32 sm:w-80 sm:h-40 md:w-[400px] md:h-[200px]
                         bg-gradient-to-t from-[#6d2b97] via-[#6c95f5] to-[#6b5c5]
                         absolute -top-6 sm:-top-4 md:top-4 rounded-full rotate-12 opacity-80"
            />

            {/* Small top-left image */}
            <img 
              src={hero}
              alt="about-small-1" 
              className="absolute z-20 w-20 h-20 shadow-lg sm:w-28 sm:h-28 -top-10 left-3 sm:-top-14 sm:left-6 rounded-2xl"
            />

            {/* Main center image */}
            <img 
              src={hero1}
              alt="about-main" 
              className="relative z-10 w-40 mt-12 shadow-xl h-52 sm:w-56 sm:h-72 md:w-72 md:h-96 rounded-xl"
            />

            {/* Small bottom-right image */}
            <img 
              src={hero3}
              alt="about-small-2" 
              className="absolute z-20 w-16 h-16 shadow-lg sm:w-24 sm:h-24 -bottom-6 right-3 sm:-bottom-10 sm:right-6 rounded-2xl"
            />
          </div>
        </figure>

        {/* ==== Text Section ==== */}
        <article 
          data-aos="fade-left" 
          data-aos-delay="500" 
          className="relative px-2 text-center lg:text-left"
        >
          <div 
            className="absolute w-28 h-28 sm:w-40 sm:h-40 bg-[#cd3cf5] 
                       rounded-full blur-2xl opacity-40 -top-5 left-1/2 
                       -translate-x-1/2 lg:left-10 lg:translate-x-0"
          />

          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            About Me
          </h1>

          <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            I am a passionate <span className="font-semibold text-purple-400">Frontend Developer</span> 
            who loves creating clean, modern UI experiences with 
            <span className="font-semibold text-purple-400"> React, Tailwind CSS, and JavaScript</span>.
          </p>

          {showMore && (
            <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl animate-fadeIn">
              I enjoy solving real-world problems, learning new technologies, 
              and building interfaces that are both beautiful and functional.  
              My long-term goal is to grow into a highly skilled Frontend Engineer 
              and contribute to impactful digital products.
            </p>
          )}

          <button 
            onClick={() => setShowMore(!showMore)}
            className="inline-flex text-white border-2 py-2 px-6 
                       focus:outline-none hover:bg-[#801b9c] 
                       hover:shadow-lg [0_0_40px_rgba(128,0,128,0.7)] 
                       rounded-full text-sm sm:text-lg">
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </article>

      </div>
    </section>
  );
}
