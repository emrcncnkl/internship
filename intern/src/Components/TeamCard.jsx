function TeamCard({ image, person, personJob }) {
  return (
    <div className="bg-white shadow-lg border-opacity-40 rounded-lg border-stone-100 p-6 border-2 w-[250px]">
      <div>
        <img
          src={image}
          alt={person}
          className="rounded-t-lg w-full h-48 object-cover"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-semibold text-xl font-manrope text-black">
          {person}
        </h3>
        <p className="text-gray-400 font-light font-manrope">
          {personJob}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
