import React, { useEffect } from 'react';
import image1 from './images/j.jpg'; // Adjust the path according to your project structure
import image2 from './images/k.jpg'; // Adjust the path according to your project structure
// Adjust the path according to your project structure

const Page2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      h2: "Our Vision",
      text: "Our vision is to cultivate a future where women are at the forefront of AI innovation and entrepreneurship. We envision a world where women have equal opportunities to utilize technology to solve complex challenges, create sustainable businesses, and make a lasting impact on their communities. By nurturing a diverse and inclusive ecosystem, we aspire to inspire women to pursue careers in tech, lead successful ventures, and contribute meaningfully to the global economy.",
      image: image1,
    },
    {
      h2: "Mission",
      text: "Our mission is to provide women with foundational and advanced knowledge in AI and entrepreneurial skills, enabling them to leverage cutting-edge technology and innovative business practices. We strive to create a supportive and inclusive learning environment that fosters continuous growth, collaboration, and community development. Through our program, we aim to enhance employability, drive economic growth, and contribute to societal progress by empowering women to become leaders and change-makers in their fields.",
      image: image2,
    },
  ];

  return (
    <section
      id="about-us-section"
      className="min-h-screen py-12 px-4 flex flex-col items-center"
      style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }}
    >
      <div className="max-w-4xl text-center text-white mb-8">
        
      </div>
      <div className="flex flex-col space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2 p-4">
                  <img src={section.image} alt="Our team" className="w-full h-auto rounded-lg shadow-lg" style={{ maxHeight: '300px' }} />
                </div>
                <div className="md:w-1/2 p-4 text-white md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.h2}</h2>
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    {section.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2 p-4 text-white md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.h2}</h2>
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    {section.text}
                  </p>
                </div>
                <div className="md:w-1/2 p-4">
                  <img src={section.image} alt="Our team" className="w-full h-auto rounded-lg shadow-lg" style={{ maxHeight: '300px' }} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page2;
