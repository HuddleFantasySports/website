import ContactForm from "@/components/ContactForm";

const founders = [
  {
    name: "Jack Sadis",
    role: "GTM strategy, partnerships, and product-user alignment",
    team: "Seattle Seahawks",
    wins: 3,
    image: "/About/Jack.png",
  },
  {
    name: "Satish Bisa",
    role: "Backend systems and scaling sports communities",
    team: "New England Patriots",
    wins: 5,
    image: "/About/Satish.png",
  },
  {
    name: "Jesse McMahon",
    role: "Full-stack architecture and secure B2B platforms",
    team: "Philadelphia Eagles",
    wins: 4,
    image: "/About/Jesse.png",
  },
];

export default function About() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* About MESH */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">About MESH</h2>
          <p className="text-center max-w-prose mx-auto text-sm">
            MESH is where fantasy sports meet real-life squads. We built it
            because managing a fantasy team shouldn’t feel like a one-man job.
            Whether it’s a fraternity, a group of coworkers, or your hometown
            friends, MESH gives teams a way to compete together—with shared
            decisions, real rivalries, and a season that actually feels like
            yours. Play for something more.
            <br />
            <br />
            We’re not here to replace your Sunday scroll through ESPN—we’re here
            to give it meaning. Built by friends, made for squads, powered by
            the belief that fantasy sports are better when they’re shared.
          </p>
        </section>
        {/* Meet our Founders */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="p-[1px] bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl shadow-md"
              >
                <div className="bg-[#212731] rounded-2xl p-6 text-center h-full flex flex-col items-center">
                  <img
                    src={founder.image}
                    alt={`${founder.name} profile`}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />

                  <h3 className="font-semibold text-white">{founder.name}</h3>
                  <p className="text-sm text-white mt-1">
                    Role: {founder.role}
                  </p>
                  <p className="text-sm text-white      mt-2">
                    Favorite Team:{" "}
                    <span className="font-medium">{founder.team}</span>
                    <br />
                    Fantasy Championships:{" "}
                    <span className="font-medium">{founder.wins}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">Our Mission</h2>
          <p className="mt-4 text-center text-sm max-w-prose mx-auto">
            At MESH, we believe fantasy football is better when played
            together—where teamwork drives strategy, and victories are won as a
            squad—because there’s no ‘I’ in ‘squad’.
          </p>
        </section>
      </div>
    </main>
  );
}
