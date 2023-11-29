"use client";
const ContactPage = () => {
  return (
    <div class="py-10 bg-gray-800">
      <div class="container max-w-7xl mx-auto my-4 px-4 lg:px-20">
        <div class="bg-slate-700 w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="flex">
            <h1 class="font-bold text-5xl text-white">
              Contact Me
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="Message*"
              class="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="bg-green-700 hover:bg-green-800 text-sm font-bold tracking-wide text-center  text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Let's talk
            </button>
          </div>
        </div>

        <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-slate-700 rounded-2xl">
          <div class="flex flex-col text-white">
            <h1 class="font-bold text-4xl my-4">
            Contact Info
            </h1>
            <p class="text-gray-300">
              Don't hesitate to get in touch! I'm open to conversations about projects, opportunities, or anything else you'd like to discuss. Looking forward to connecting! 🚀
            </p>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <h2 class="text-2xl">Call Me</h2>
                <p class="text-gray-300">📧 Email: kailashsharmaansh1999@gmail.com</p>
                <p class="text-gray-300">📱 Phone: 7678163520</p>
                <p class="text-gray-300">📱 Phone: 7531949220</p>
              </div>
            </div>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <sapn class="rounded-full bg-green-700 h-4 w-4 inline-block mx-1 text-center pt-1">
                <i class="fab fa-facebook-f text-blue-900" />
              </sapn>
              <sapn class="rounded-full bg-green-700 h-4 w-4 inline-block mx-1 text-center pt-1">
                <i class="fab fa-linkedin-in text-blue-900" />
              </sapn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
