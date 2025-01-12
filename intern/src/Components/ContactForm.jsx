import images from "../assets/import";

function ContactForm() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-6 py-10 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-6xl">
        <div className="flex-1 flex justify-center">
          <img
            src={images.contactform}
            alt="people"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 bg-white rounded-lg p-8 max-w-md w-full">
          <h3 className="text-2xl font-bold font-manrope text-gray-800 mb-6 lg:text-right">
            We’d love to hear <br /> from you
          </h3>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              id="name"
              placeholder="Name*"
              className="w-full border border-gray-700 rounded-md p-4 bg-white text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email*"
              className="w-full border border-gray-700 rounded-md p-4 bg-white text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="url"
              id="website"
              placeholder="Website URL*"
              className="w-full border border-gray-700 rounded-md p-4 bg-white text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              id="details"
              placeholder="Project Details*"
              rows="4"
              className="w-full border border-gray-700 rounded-md p-4 bg-white text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
