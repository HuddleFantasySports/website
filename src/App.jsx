import "./App.css";
import MeshVideo from "./components/MeshVideo";
import { TestimonalCarousel } from "./components/TestimonialCarousel";
import { MenuBar } from "./components/menubar";
import { ContactUs } from "./components/ContactUsButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UniversityCarousel from "./components/UniversityCarousel";
import { HomeDynamicText } from "./components/VoteOnDynamicText";
import { Link } from "react-router-dom";
import { AppPreviewCarouselPlaceholder } from "./components/AppPreviewCarouselPlaceholder";

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
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition">
            Download the app
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition">
            Explore Leagues
          </button>
        </div>
      </div>
      <UniversityCarousel></UniversityCarousel>

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
          <a className="px-4 py-2 text-sm font-semibold text-white bg-[#8261C2] rounded-md hover:bg-[#6e4eb6] transition my-10">
            Learn More about Squad-Based Management
          </a>
        </Link>
      </div>
    </main>
  );
}

function SquadBasedManagement() {
  return <h1>Squad Page</h1>;
}

function FantasyLeagues() {
  return <h1>Fantasy Page</h1>;
}

function Testimonials() {
  return (
    <main className="flex-1 container py-8">
      <h1 className="text-6xl font-bold mb-4">
        Don’t Take Our Word for It—Hear It From the Squads.
      </h1>
      <p className="text-lg">
        MESH is changing the game for fantasy sports. Here’s what players have
        to say.
      </p>
      <MeshVideo />
      <TestimonalCarousel />
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
