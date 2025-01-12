import TeamCard from "./TeamCard";

function Team() {
  const members = [
    {
      image: "./src/assets/images/cards/Founder.png",
      person: "Esther Howard",
      personJob: "Founder",
    },
    {
      image: "./src/assets/images/cards/Developer.png",
      person: "Cody Fisher",
      personJob: "Developer",
    },
    {
      image: "./src/assets/images/cards/Designer.png",
      person: "Brooklyn Simmons",
      personJob: "Designer",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-manrope mb-6 text-center text-black">
          Meet the heroes behind the magic
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8">
          {members.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              person={member.person}
              personJob={member.personJob}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
