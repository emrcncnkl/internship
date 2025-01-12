import images from "../assets/import";

function AboutUs() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <article className="text-left mt-5">
          <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl font-manrope mb-5">
            Who we are
          </h2>
          <p className="text-[#101010] leading-8 md:leading-10 text-lg md:text-xl lg:text-2xl font-manrope font-medium">
            We love what we do and create partnerships with our clients
            to ensure their digital transformation is positioned for
            long-term success. We believe that the human dimensions
            essential to start any successful project and that this is
            where splendid emotional relationships between the company
            and people are born.
          </p>
        </article>
        <figure className="flex justify-center items-center mt-5">
          <img
            src={images.drink}
            alt="About Us"
            className="w-full rounded-md shadow-lg object-contain"
          />
        </figure>
      </div>
    </section>
  );
}

export default AboutUs;
