"use client";
const ContactPage = () => {
  return (
    <div className="py-10 bg-gray-800">
      <div className="container max-w-7xl mx-auto my-4 px-4 lg:px-20">
        <div className="bg-slate-700 w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold text-5xl text-white">
              Contact Me
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="bg-green-700 hover:bg-green-800 text-sm font-bold tracking-wide text-center  text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Let's talk
            </button>
          </div>
        </div>

        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-slate-700 rounded-2xl">
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-4xl my-4">
            Contact Info
            </h1>
            <p className="text-gray-300">
              Don't hesitate to get in touch! I'm open to conversations about projects, opportunities, or anything else you'd like to discuss. Looking forward to connecting! 🚀
            </p>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Me</h2>
                <p className="text-gray-300">📧 Email: kailashsharmaansh1999@gmail.com</p>
                <p className="text-gray-300">📱 Phone: 7678163520</p>
                <p className="text-gray-300">📱 Phone: 7531949220</p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <sapn className="rounded-full bg-green-700 h-4 w-4 inline-block mx-1 text-center pt-1">
                <i className="fab fa-facebook-f text-blue-900" />
              </sapn>
              <sapn className="rounded-full bg-green-700 h-4 w-4 inline-block mx-1 text-center pt-1">
                <i className="fab fa-linkedin-in text-blue-900" />
              </sapn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
