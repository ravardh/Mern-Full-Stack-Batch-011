import React from "react";

const Contact = () => {

 
  const function1 = (event) => {
    event.preventDefault();
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("message").value);
    document.getElementById("contact").innerText="Contact Done"
  };

  return (
    <>
      <div className="h-full flex items-center justify-center bg-gray-100">
        <div className="w-2/3 min-h-2/3 bg-white rounded shadow">
          <form className="p-8 flex flex-col gap-3" onSubmit={function1}>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 text-center" id="contact">
              Contact Me
            </h2>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              id="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
