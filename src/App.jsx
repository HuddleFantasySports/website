import "./App.css";
import MeshVideo from "./components/MeshVideo";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { MenuBar } from "./components/menubar";
import { ContactUs } from "./components/ContactUsButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UniversityCarousel from "./components/UniversityCarousel";
import { HomeDynamicText } from "./components/VoteOnDynamicText";
import { Link } from "react-router-dom";
import { AppPreviewCarouselPlaceholder } from "./components/AppPreviewCarouselPlaceholder";
import { SquadUpCarousel } from "./components/SquadUpCarousel";
import { SquadFeatures } from "./components/SquadFeatures";

function Home() {
  return (
    <main className="flex-1 w-full py-8">
      <h1
        className="text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text 
             bg-[linear-gradient(90deg,_#80FFEA,_#B59BF0,_#FF7EB3,_#80FFEA)] 
             bg-[length:300%_300%] animate-gradient-x"
      >
        Squad Up. Compete. Win.
      </h1>
      <div className="font-sans text-2xl italic">
        A new era of fantasy football starts here
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex flex-wrap gap-4">
          <button className=" shadow-md px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition">
            Download the app
          </button>
          <button className=" shadow-md px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition">
            Explore Leagues
          </button>
        </div>
      </div>

      <UniversityCarousel></UniversityCarousel>
      <hr
        className="
      relative
      left-1/2                /* position its left edge at 50% of parent */
      transform -translate-x-1/2 /* shift it back by half its own width */
      w-screen                /* make it as wide as the viewport */
      border-t border-gray-200 opacity-50
    "
      />

      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        {/* Left: Vote text */}
        <div className="w-full md:w-1/2">
          <HomeDynamicText />
        </div>
        {/* Right: Phone preview */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AppPreviewCarouselPlaceholder />
        </div>
      </div>
      <div className="my-6">
        <Link to="/squad-based-management">
          <a className=" shadow-md px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition my-10">
            Learn More about Squad-Based Management
          </a>
        </Link>
        <hr
          className="
      relative
      left-1/2                /* position its left edge at 50% of parent */
      transform -translate-x-1/2 /* shift it back by half its own width */
      w-screen                /* make it as wide as the viewport */
      border-t border-gray-200 opacity-50
      my-10
    "
        />
        <SquadUpCarousel></SquadUpCarousel>
      </div>
      <Link to="/fantasy-leagues">
        <a className=" shadow-md  px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition my-5">
          Learn More About Leagues
        </a>
      </Link>
    </main>
  );
}

function SquadBasedManagement() {
  return (
    <main className="flex-1 flex flex-col items-center text-center max-w-3xl mx-auto px-4 py-8 space-y-5">
      <div>
        <section className="py-16">
          <h1 className="text-4xl font-bold text-center">
            Fantasy Football, Reimagined for Everyone.
          </h1>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Whether you’re a seasoned pro or a first-time player, MESH makes
            fantasy football a squad experience.
          </p>
        </section>
        {/* Divider */}
        <hr
          className="
      relative
      left-1/2                /* position its left edge at 50% of parent */
      transform -translate-x-1/2 /* shift it back by half its own width */
      w-screen                /* make it as wide as the viewport */
      border-t border-gray-200 opacity-50
    "
        />

        {/* 2️⃣ Quote */}
        <section className="py-16">
          <blockquote className="text-center italic max-w-3xl mx-auto">
            “Forget going solo – MESH transforms fantasy football into a shared
            mission. Compete together. Win together. Grow together.”
          </blockquote>
        </section>

        {/* Divider */}
        <hr
          className="
      relative
      left-1/2                /* position its left edge at 50% of parent */
      transform -translate-x-1/2 /* shift it back by half its own width */
      w-screen                /* make it as wide as the viewport */
      border-t border-gray-200 opacity-50
    "
        />
      </div>
      <SquadFeatures></SquadFeatures>
    </main>
  );
}

function FantasyLeagues() {
  return <h1>Fantasy Page</h1>;
}

function Testimonials() {
  return (
    <main className="flex-1 flex flex-col items-center text-center max-w-3xl mx-auto px-4 py-8 space-y-5">
      <h1 className="text-5xl font-bold">
        Don’t Take Our Word for It—Hear It From the Squads.
      </h1>
      <p className="text-1xl italic">
        MESH is changing the game for fantasy sports. Here’s what players have
        to say.
      </p>
      <MeshVideo />
      <TestimonialCarousel />

      <ContactUs />
    </main>
  );
}

function Sponsors() {
  return <h1>Sponsors Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/squad-based-management"
            element={<SquadBasedManagement />}
          />
          <Route path="/fantasy-leagues" element={<FantasyLeagues />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
