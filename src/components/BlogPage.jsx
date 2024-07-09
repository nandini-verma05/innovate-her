import React, { useEffect } from 'react';
// Import the image

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id='vision-section'
      className="bg-black text-white min-h-screen flex flex-col items-center py-12"
      style={{ background: 'linear-gradient(to right, #143151, #B82E75)', opacity: 1 }}
    >
      <div className="container mx-auto px-4">
        {/* Blog Header */}
        
        {/* 36INC Section */}
        <div
          id="about-us-section"
          className=" min-h-screen py-12 px-4 flex flex-col items-center"
          style={{ background: 'linear-gradient(to right, #143151, #B82E75)', opacity: 0.9 }}
        >
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
            <h1 className="text-4xl font-bold mb-8">36INC</h1>
            <h2 className="text-4xl font-bold mb-4">36INC: Nurturing Innovation and Entrepreneurship in Chhattisgarh</h2>
            <div className="text-lg leading-relaxed text-justify">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="mb-4">
                36INC is a premier startup incubator located in Raipur, Chhattisgarh, dedicated to fostering innovation and supporting the entrepreneurial ecosystem. Established with the vision of transforming Chhattisgarh into a leading hub of startups and technological advancements, 36INC provides a conducive environment for early-stage startups to grow and succeed.
              </p>
              
              <h2 className="text-3xl font-bold mb-4">Mission</h2>
              <p className="mb-4">
                The mission of 36INC is to empower startups with the resources, mentorship, and networking opportunities they need to turn innovative ideas into successful, scalable businesses. By bridging the gap between vision and execution, 36INC aims to drive economic growth and job creation in the region.
              </p>
              
              <h2 className="text-3xl font-bold mb-4">Facilities and Services</h2>
              <ul className="list-disc pl-5 mb-4 text-justify">
                <li className="mb-2">
                  <strong>State-of-the-Art Infrastructure:</strong> 36INC offers world-class infrastructure, including modern workspaces, meeting rooms, and event spaces designed to facilitate collaboration and innovation.
                </li>
                <li className="mb-2">
                  <strong>Mentorship and Guidance:</strong> Startups at 36INC benefit from a robust network of experienced mentors and industry experts who provide invaluable guidance and support throughout their entrepreneurial journey.
                </li>
                <li className="mb-2">
                  <strong>Funding Support:</strong> 36INC assists startups in securing funding through various channels, including venture capital, angel investors, and government grants, ensuring they have the financial backing needed to scale their operations.
                </li>
                <li className="mb-2">
                  <strong>Training and Workshops:</strong> Regular training sessions, workshops, and bootcamps are conducted to enhance the skills and knowledge of entrepreneurs, covering topics such as business development, marketing, legal compliance, and more.
                </li>
                <li className="mb-2">
                  <strong>Networking Opportunities:</strong> Through various events, demo days, and networking sessions, 36INC connects startups with potential investors, partners, and customers, fostering a vibrant startup community.
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
              <ul className="list-disc pl-5 mb-4 text-justify">
                <li className="mb-2">
                  <strong>Successful Incubations:</strong> Over the years, 36INC has successfully incubated numerous startups across diverse sectors such as technology, healthcare, finance, and more, many of which have gone on to achieve significant milestones and recognition.
                </li>
                <li className="mb-2">
                  <strong>Economic Impact:</strong> By nurturing startups and facilitating their growth, 36INC has contributed to job creation and economic development in Chhattisgarh, positioning the state as an emerging startup hub in India.
                </li>
                <li className="mb-2">
                  <strong>Recognition and Awards:</strong> 36INC has been recognized for its outstanding contributions to the startup ecosystem, receiving accolades from various industry bodies and government organizations.
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="mb-4 text-justify">
                36INC stands at the forefront of Chhattisgarh’s startup revolution, providing a dynamic and supportive environment for entrepreneurs to thrive. With its comprehensive incubation services, strategic guidance, and unwavering commitment to innovation, 36INC is paving the way for the next generation of successful startups, driving economic growth and technological advancement in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="https://36inc.in/">Visit 36INC</a>
      </button>
    </div>
  );
};

export default BlogPage;
