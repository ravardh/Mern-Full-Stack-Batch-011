import React, { useState } from "react";
import thinking from "../assets/person-thinking.jpg";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log(contactData);
      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-[91vh] bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center py-10 px-2">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 ">
        <div className="grid md:flex gap-8 items-center ">
          <div className="w-full md:w-1/2">
            <img
              src={thinking}
              alt="Person thinking"
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="font-bold italic text-3xl mb-5 text-blue-700">
              Get in Touch with us
            </h1>
            <form className="flex flex-col gap-5 bg-blue-50 p-6 rounded-xl shadow-inner">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={contactData.subject}
                  onChange={handleChange}
                  placeholder="What is it about"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="2"
                  required
                  value={contactData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow"
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
