import React from "react";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <section className=" lg:mt-4 mt-20 lg:h-[90vh] text-black w-full lg:grid lg:grid-cols-2 lg:gap-x-4 lg:items-center lg:justify-center md:flex md:flex-col md:gap-10 select-none">
      <div className="information lg:ml-8 mx-5 md:w-[60%] lg:w-auto md:pt-12 ">
        <h1 className="md:text-lg lg:text-2xl lg:mb-3.5 mb-1 font-bold text-orange-500 font-[Poppins] text-sm">
          Hello, it's Me
        </h1>
        <span className="lg:text-5xl text-2xl md:text-3xl font-[Poppins] font-bold lg:mb-4 inline-block tracking-wide bg-gradient-to-r  from-orange-500  via-sky-500 to-green-500  bg-clip-text text-transparent">
          MANILAXMI SISVAS
        </span>

        <h2 className="lg:text-3xl text-xl md:mt-2 lg:mt-1 md:text-2xl font-bold font-[Poppins] text-purple-500 mb-3">
          My Skills :{" "}
          <span>
            <TypeAnimation
              sequence={[
                " HTML (HTML5)", // text to type
                2000, // wait 2s
                "Vanilla css",
                2000,
                "Tailwindcss",
                2000,
                "Javscript (ES6)",
                2000,
                "React Js",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h2>
        <p className=" font-bold font-[Poppins]  text-sm lg:text-lg lg:text-justify md:text-pretty md:mt-4">
          "Hi, I'm Manilaxmi sisvas Kundarapu, a frontend developer skilled in
          building responsive and user-friendly web interfaces using HTML, CSS,
          JavaScript, and React. I'm passionate about creating clean UI/UX and
          continuously improving my skills with modern tools and frameworks."
        </p>
        <a href="/Kundarapu_Manilaxmi sisvas_Resume.pdf" download>
          <button
            type="button"
            className="text-white bg-gradient-to-r font-[Poppins] from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 lg:font-medium text-sm rounded-xl font-semibold px-5 py-2.5 text-center lg:me-2  lg:mt-8 mt-1.5 cursor-pointer md:mt-7"
          >
            Download Resume
          </button>
        </a>
      </div>

      <div className="image lg:mt-6 lg:w-auto md:w-30% mt-3 cursor-no-drop  flex justify-center mx-10">
        <img
          className=" md:w-90 lg:w-120 w-60 ml-10 "
          src="/profile2.png"
          alt="img"
        />
      </div>
    </section>
  );
};

export default Home;
