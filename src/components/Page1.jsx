import React, { useEffect } from 'react';
import image1 from './images/1.jpg'; // Adjust the path according to your project structure
import image2 from './images/2.jpg'; // Adjust the path according to your project structure
import image3 from './images/x.jpg'; // Adjust the path according to your project structure

const Page1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      text: "InnovateHer: Women AI & Entrepreneurship Development Program is a pioneering initiative designed to empower women with the knowledge and skills necessary to thrive in the digital age. Our program offers comprehensive training in Artificial Intelligence (AI) and entrepreneurship, aiming to bridge the gender gap in the tech industry and promote economic empowerment.",
      image: image1,
    },
    {
      text: "We provide women with foundational and advanced knowledge in AI and entrepreneurial skills, enabling them to leverage cutting-edge technology and innovative business practices. By creating a supportive and inclusive learning environment that fosters continuous growth, collaboration, and community development, we aim to enhance employability, drive economic growth, and contribute to societal progress. Our program empowers women to become leaders and change-makers in their fields.",
      image: image2,
    },
    {
      text: "InnovateHer is more than just a training program; it is a movement to empower women and create a brighter, more inclusive future. By joining InnovateHer, you will not only gain valuable skills and knowledge but also become part of a community dedicated to driving positive change and innovation. Together, we can shape the future of technology and entrepreneurship, one empowered woman at a time.",
      image: image3,
    },
  ];

  return (
    <section
      id="about-us-section"
      className="min-h-screen py-12 px-4 flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }}
    >
      <div className="max-w-4xl text-center text-white mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
      </div>
      <div className="flex flex-col space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2 p-4">
                  <img
                    src={section.image}
                    alt="Our team"
                    className="w-full h-auto rounded-lg shadow-lg"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
                <div className="md:w-1/2 p-4 text-white md:text-left">
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    {section.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2 p-4 text-white md:text-left">
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    {section.text}
                  </p>
                </div>
                <div className="md:w-1/2 p-4">
                  <img
                    src={section.image}
                    alt="Our team"
                    className="w-full h-auto rounded-lg shadow-lg"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page1;
