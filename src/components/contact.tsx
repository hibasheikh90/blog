import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {/* Heading */}
        <div>
          <h2 className="text-center text-3xl font-extrabold text-blue-950">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Have a question or feedback? Wed love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            {/* Email Input */}
            <div className=" pt-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            {/* Message Input */}
            <div className=" pt-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center text-gray-600">
          <p>Email: <a href="mailto:info@blogify.com" className="text-blue-900 hover:underline">info@blogbox.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-800 hover:underline">+1 234 567 890</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
