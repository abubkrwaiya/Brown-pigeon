import {useInView} from "react-intersection-observer";
import PageHeader from "../components/PageHeader";
import TeamMember from "../components/TeamMember";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Adnan_Techy",
      role: "CEO & Lead Consultant",
      image: "./images/sample.jpeg",
      bio: "With over 15 years in IT consulting, Adnan_Techy leads our vision for technological excellence.",
    },
    {
      name: "Abubkr Waiya",
      role: "Head of Training",
      image: "./images/sample.jpeg",

      bio: "Abubkr Waiya brings 10 years of experience in educational technology and curriculum development.",
    },
    {
      name: "Umar Waiya",
      role: "Technical Director",
      image: "./images/sample.jpeg",
      bio: "Umar Waiya specializes in enterprise architecture and digital transformation strategies.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Dedicated to empowering through technology"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              At Brown Pigeon, we believe in making technology accessible to
              everyone. Our mission is to bridge the digital divide through
              expert consultation and comprehensive training programs.
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
