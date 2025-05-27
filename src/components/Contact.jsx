import React from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f0d499e-c811-467d-8550-2f8ac341b027");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thanks for contacting me!",
        text: "Mail sent successfully!",
        icon: "success",
      });
      event.target.reset();
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center font-[Poppins] select-none">
      <div className="w-full md:max-w-md p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg mx-8 lg:h-auto md:h-[600px] lg:mt-4">
        <h2 className="md:text-3xl text-xl font-bold text-orange-600 text-center mb-6 ">
          Contact Me
        </h2>
        <form className="md:space-y-8 " onSubmit={onSubmit}>
          <div>
            <label
              className="block font-bold  text-black mb-1 md:mb-3"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-sky-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              className="block font-bold text-black mb-1 md:mb-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-sky-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-black font-bold mb-1 md:mb-3"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-sky-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-white text-black font-semibold py-2 rounded-lg hover:bg-white/80 transition duration-300 md:text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
