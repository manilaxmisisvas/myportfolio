import React from "react";

const About = () => {
  return (
    <section className="about h-[90vh] lg:h-screen w-full  mt-16 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-20 lg:gap-y-40 lg:px-16 lg:py-16 overflow-scroll mx-3 md:flex md:flex-col md:gap-10 md:pt-8 md:ml-4 select-none">
      <div className="about-me ">
        <span className="lg:text-4xl  text-2xl mt-3 text-orange-400 font-bold font-[Poppins] lg:mb-8 inline-block">
          I am Manilaxmi sisvas,
        </span>
        <p className=" text-sm lg:text-lg font-bold font-[Poppins] text-gray-700 lg:text-justify text-left mr-3 md:mt-4 md:text-pretty md:pr-10">
          I’m an aspiring frontend developer with a solid understanding of HTML,
          CSS, JavaScript, and React. I enjoy creating clean, responsive, and
          accessible user interfaces, and I’m continuously learning to improve
          my skills. I’ve completed certifications in Frontend Development and
          Emerging Technologies, where I gained practical exposure to modern web
          tools like Tailwind CSS, React Router, and Git. I’ve worked on small
          personal projects to apply what I’ve learned and strengthen my coding
          fundamentals. I’m now looking for an entry-level opportunity where I
          can contribute, learn from experienced developers, and grow into a
          professional frontend role.
        </p>
      </div>

      <div className="education md:flex md:flex-col md:gap-6">
        <div>
          <h1 className="lg:text-4xl text-xl underline decoration-orange-500 lg:underline-offset-8 underline-offset-4 text-blue-600 font-bold font-[Poppins] lg:mb-8 mb-1.5 md:mb-3">
            Education
          </h1>
          <h2 className="lg:text-xl text-lg font-bold font-[Poppins] text-pink-600">
            {" "}
            B.Tech in Computer Science - (2021–2025) | CGPA-8.2/10
          </h2>
        </div>

        <div className="certificates lg:flex lg:flex-col lg:gap-2 md:mb-3">
          <h1 className="lg:text-4xl text-xl underline decoration-orange-500 lg:underline-offset-8 underline-offset-4 text-blue-600 font-bold font-[Poppins] lg:my-8 my-2">
            Certifications
          </h1>

          <span className="lg:text-xl text-lg font-bold font-[Poppins] text-purple-700 lg:whitespace-nowrap text-balance">
            Finishing School for Employability – ICT Academy (Nov 2024)
          </span>
          <br />
          <span className="lg:text-xl text-lg font-bold font-[Poppins] text-purple-700 text-wrap">
            Emerging Technologies Program – Edunet Foundation <br />
            (Dec 2024 – Feb 2025)
          </span>
        </div>
      </div>

      <marquee
        className="lg:w-screen lg:h-20 bg-transparent md:col-span-2 md:content-center md:justify-center  h-14 w-screen mb-1 mt-3 justify-center items-center md:h-20 lg:mt-16"
        behavior="scroll"
        direction="left"
        scrollamount="13"
        loop="infinite"
        scrolldelay="0"
      >
        <div className="techstacks flex justify-center items-center w-fit ">
          <span className="md:text-3xl text-lg font-bold text-black font-[Poppins] mr-10">
            TECH-STACK
          </span>
          <ul className="flex gap-16 min-w-[400px] ">
            <li>
              <img
                className="rounded-full w-16 border-[3px] md:border-black"
                src="/html.jpg"
                alt="html"
              />
            </li>
            <li>
              <img
                className="rounded-full w-16 border-[3px] md:border-black"
                src="/css.png"
                alt="css"
              />
            </li>
            <li>
              <img
                className="rounded-full w-16 border-[3px] md:border-black"
                src="/js.png"
                alt="javascript"
              />
            </li>
            <li>
              <img
                className="rounded-full w-16 "
                src="/ts.png"
                alt="tailwindcss"
              />
            </li>
            <li>
              <img
                className="rounded-full w-16 border-[3px] md:border-black"
                src="/reactlogo.jpg"
                alt="react"
              />
            </li>
          </ul>
        </div>
      </marquee>
    </section>
  );
};

export default About;
