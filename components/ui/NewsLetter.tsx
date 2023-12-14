export const NewsLetter = () => {
  return (
    <div className="w-full max-w-[500px] m-auto">
      <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
        SUBSCRIBE
      </h2>
      <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="footer-field"
            name="footer-field"
            className="input placeholder:text-gray-700"
            placeholder="laura@gml.it"
          />
        </div>
        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-primaryPal-600 border-0 py-2 px-6 focus:outline-none hover:bg-primaryPal-700 rounded">
          Enviar
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
        Bitters chicharrones fanny pack
        <br className="lg:block hidden" />
        waistcoat green juice
      </p>
    </div>
  );
};
