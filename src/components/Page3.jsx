import React from "react";
import image1 from './images/L.jpg'; // Import your images
import image2 from './images/n.jpg';

const cards = [
  {
    heading: "Comprehensive Training",
    content:
      "Our curriculum covers the fundamentals of AI, including machine learning, data science, and AI tools, as well as essential entrepreneurial skills such as business planning, marketing, and finance. We combine theoretical knowledge with hands-on projects to ensure practical application and deep understanding. This approach cultivates a holistic understanding, preparing them to thrive in dynamic tech environments and entrepreneurial landscapes.",
  },
  {
    heading: "Mentorship and Support",
    content:
      "Participants benefit from the guidance of experienced mentors and industry experts who provide valuable insights, support, and encouragement throughout the program. Our mentorship network helps participants navigate challenges, refine their ideas, and build successful careers or ventures. This exposure empowers them to forge meaningful connections and leverage collective wisdom to achieve their professional goals effectively.",
  },
  {
    heading: "Internship Opportunities",
    content:
      "We collaborate with local businesses and online platforms to offer internship opportunities that provide real-world experience and practical skills. Internships are accompanied by ongoing mentorship and support to maximize learning and professional development.",
  },
  {
    heading: "Economic Empowerment",
    content:
      "By equipping women with AI and entrepreneurial skills, we empower them to enhance their income potential, either by improving their employability or by starting their own AI-driven businesses. Trained participants can also become AI trainers, creating additional income streams .",
  },
  {
    heading: "Community Building",
    content:
      "We believe in the power of community and collaboration. Our program fosters a culture of continuous learning and knowledge-sharing, encouraging participants to support each other and contribute to the growth and development of their local communities.",
  },
  {
    heading: "Leadership Development",
    content:
      "Our program includes leadership development sessions to help participants build essential soft skills such as communication, teamwork, and problem-solving. These skills are crucial for success in both entrepreneurial ventures and corporate environments.",
  },
];

const sections = [
  {
    text: [
      "Economic Growth: By integrating AI into local businesses and industries, we aim to enhance productivity and efficiency, leading to economic growth. New AI-based ventures and startups can emerge, contributing to the local economy and creating job opportunities.",
      "Improved Quality of Life: AI applications in healthcare, education, and agriculture can significantly improve the quality of life. Better healthcare diagnostics, personalized education, and smart farming techniques are just a few ways AI can make a positive impact.",
      "Sustainable Development: AI-driven solutions can address local challenges in agriculture, water management, and environmental sustainability. Communities can leverage AI to develop sustainable practices and resilience against climate change.",
    ],
    image: image1,
  },
  {
    text: [
      "Educational Advancements: Increased access to AI knowledge and tools can elevate educational standards. Schools and educational institutions can adopt AI to improve teaching methods and learning outcomes.",
      "Social Upliftment: Empowering women with AI skills promotes social inclusion and uplifts marginalized communities. Women's participation in the tech field can inspire social change and break traditional gender roles.",
    ],
    image: image2,
  },
];

const Card = ({ heading, content }) => (
  <div className="bg-white bg-opacity-75 shadow-md rounded-lg p-6 mb-4">
    <h2 className="text-xl font-semibold mb-2">{heading}</h2>
    <p className="text-gray-700 text-justify">{content}</p>
  </div>
);

const Section = ({ text, image, reverse }) => (
  <div className="container mx-auto p-4 flex flex-col md:flex-row items-center mb-4">
    {reverse ? (
      <>
        <div className="md:w-1/2 p-4">
          <img src={image} alt="Section" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 p-4 text-white md:text-left">
          <ul className="list-disc pl-5 text-justify">
            {text.map((item, idx) => (
              <li key={idx} className="text-lg md:text-xl leading-relaxed mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </>
    ) : (
      <>
        <div className="md:w-1/2 p-4 text-white md:text-left">
          <ul className="list-disc pl-5 text-justify">
            {text.map((item, idx) => (
              <li key={idx} className="text-lg md:text-xl leading-relaxed mb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={image} alt="Section" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </>
    )}
  </div>
);

const Page5 = () => (
  <div className="container mx-auto p-4" style={{ background: 'linear-gradient(to right, rgb(20, 49, 81), rgb(184, 46, 117))' }}>
    <h1 className="text-3xl font-bold mb-6 text-white">What We Offer</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Cards section */}
      {cards.map((card, index) => (
        <div key={index}>
          <Card heading={card.heading} content={card.content} />
        </div>
      ))}
    </div>
    <h1 className="text-3xl font-bold mt-6 mb-4 text-white">Socio-Economic Impact</h1>
    <div>
      {/* Sections */}
      {sections.map((section, index) => (
        <Section key={index} text={section.text} image={section.image} reverse={index % 2 !== 0} />
      ))}
    </div>
  </div>
);

export default Page5;
