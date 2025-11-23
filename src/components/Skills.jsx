import react from '/react.png'
import vue from '/vue.png'
import tailwind from '/tailwind.png'
import boostrap from '/boostrap.png'

// Skills Data with real descriptions
const skillsData = [
  {
    id: 1,
    image: vue,
    title: 'Vue JS',
    description: 'A progressive JavaScript framework for building modern, interactive web interfaces.',
  },
  {
    id: 2,
    image: react,
    title: 'React JS',
    description: 'A powerful library for building dynamic and reusable UI components with virtual DOM.',
  },
  {
    id: 3,
    image: tailwind,
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom, responsive designs.',
  },
  {
    id: 4,
    image: boostrap,
    title: 'Bootstrap',
    description: 'A popular CSS framework for creating responsive, mobile-first web projects quickly.',
  },
];

// SkillBox Component
const SkillBox = ({ image, title, description }) => {
  return (
    <article
      data-aos="zoom-in"
      className="p-4 text-center transition duration-300 bg-gray-800 rounded-lg shadow-lg sm:p-6 hover:bg-purple-800"
    >
      <figure className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="object-contain w-16 h-16 sm:w-20 sm:h-20"
        />
      </figure>

      <header>
        <h3 className="mb-2 text-xl font-semibold sm:text-xl">{title}</h3>
      </header>

      <p className="text-sm text-gray-400 sm:text-base">{description}</p>
    </article>
  );
};

// Main Skills Component
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex justify-center min-h-screen p-4 overflow-hidden text-white"
    >
      <div className="container relative z-20 flex flex-col items-center max-w-6xl space-y-8 sm:space-y-12">

        {/* Section Header */}
        <header data-aos="fade-up" data-aos-delay="300" className="space-y-4 text-center sm:space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl">
            My Expertise <br />and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-sm text-gray-400 sm:text-base">
            I specialize in front-end development and creating responsive, modern web applications with the latest technologies.
          </p>
        </header>

        {/* Skills Grid */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {skillsData.map(skill => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
