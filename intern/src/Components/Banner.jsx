import images from "../assets/import";

function Banner() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-[#FDCA09] overflow-hidden">
      <div className="text-center z-10">
        <h1 className="font-manrope font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Let’s create something <br /> great together.
        </h1>
      </div>
      <img
        src={images.shape1}
        alt="Shape 1"
        className="absolute w-[700px] h-[850px] top-20%] left-[10%] rotate-30 opacity-50 pointer-events-none"
      />
      <img
        src={images.shape2}
        alt="Shape 2"
        className="absolute w-[900px] h-[850px] bottom-0 left-1/2 transform -translate-x-2/2 rotate-10 opacity-30 pointer-events-none"
      />
      <div className="absolute bottom-0 flex w-full justify-between z-10 lg:w-full">
        <img
          src={images.Banner}
          alt="Banner"
          className="w-1/2 object-contain"
        />
        <img
          src={images.Banner2}
          alt="Banner2"
          className="w-1/2 object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
