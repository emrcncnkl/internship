function Achievements() {
  const stats = [
    { label: "Clients Worldwide", value: "350 +" },
    { label: "Team Members", value: "20 +" },
    { label: "Projects Completed", value: "100 +" },
    { label: "Revenue Generated", value: "85M +" },
  ];

  return (
    <div className="flex bg-black w-full justify-evenly items-center gap-6 px-8 py-6 sm:py-8 sm:mt-10 lg:px-16 lg:gap-8 lg:mt-24">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center w-full max-w-xs">
          <span
            className="font-manrope font-bold text-lg sm:text-xl lg:text-3xl"
            style={{ color: "#FEC00A" }}
          >
            {stat.value}
          </span>
          <p className="text-white text-sm font-medium sm:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
