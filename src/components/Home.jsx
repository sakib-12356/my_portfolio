import Navbar from './Navbar';
import facebook from '/facebook.jpeg';
import hero from '/hero1.jpg';
import insta from '/insta.jpeg';
import github from '/github.svg';
import link from '/link.png';
// import Adam from '/Adam_Quali_CV.pdf';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center justify-center bg-gray-950">
      {/* Background Gradient Shape */}
      <div
        className="absolute right-2 top-28 w-[450px] h-[500px] md:h-[550px] 
                   bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
                   transform rotate-45 rounded-3xl z-0"
      ></div>

      {/* Navbar Component */}
      <Navbar />

      <main>
        <div
          id="home"
          className="z-10 flex flex-col items-center justify-center w-full px-4 pt-32 pb-24 md:flex-row md:px-52 md:pb-24 mt-14 md:mt-0"
        >
          <section
            className="relative z-10 flex-1 md:text-left md:mt-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
            <header className="md:text-left">
              <h1 className="mb-4 text-2xl font-bold text-white sm:text-4xl md:text-5xl">
                SAKIB HASAN
              </h1>
              <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3a0f4a] md:text-[#c744ec] mb-2 mt-5">
                Frontend Developer
              </h2>
            </header>
            <p className="mb-6 text-base text-gray-200 sm:text-lg md:text-lg">

              Passionate Frontend Developer skilled in React, Tailwind, and modern web technologies.
              I build fast, responsive, and user-friendly web experiences.
              Always learning & improving to deliver clean code and better UI design.
            </p>

            <div className="flex items-center mt-8 mb-6 space-x-4">
              <a href="#"><img src={github} alt="github" className="w-11 h-11" /></a>
              <a href="#"><img src={link} alt="linkedin" className="w-11 h-11" /></a>
              <a href="#"><img src={facebook} alt="facebook" className="w-11 h-11" /></a>
              <a href="#"><img src={insta} alt="instagram" className="w-11 h-11" /></a>
            </div>
            <a className='mt-2'>
              <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg mt-5">
                Download CV
              </button>
            </a>

          </section>

          <figure
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex justify-center flex-1 mt-8 md:justify-end"
          >
            <img
              src={hero}
              alt="Hero Image"
              className="sm:h-[400px] md:h-[485px] sm:w-[480px] w-64 h-64 object-cover rounded-full"
            />
          </figure>
        </div>
      </main>
    </div>
  );
}