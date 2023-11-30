const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-t from-red-500 to-white flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/cdab9dd7-2543-428e-be4b-7b4ff23408b7"
        className="flex flex-col max-w-[1000px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-red-700 font-bold inline border-b-4 border-[#e7af00]">
            {" "}
            Contact{" "}
          </p>
          <p className="text-red-700 py-4">
            {" "}
            // Submit the form below or email/call at studelves@deltacohershey.com 347-280-9640{" "}
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button className="rounded-lg text-white border-2 hover:bg-[#e7af00] hover:border-[#e7af00] px-4 py-3 my-8 mx-auto flex items-center">
          Contact
        </button>
      </form>
    </div>
  );
};

export default Contact;
