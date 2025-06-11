import "./App.css";
import MeshVideo from "./components/MeshVideo";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { MenuBar } from "./components/menubar";
import { ContactUsButton } from "./components/ContactUsButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UniversityCarousel from "./components/UniversityCarousel";
import { HomeDynamicText } from "./components/VoteOnDynamicText";
import { Link } from "react-router-dom";
import { AppPreviewCarouselPlaceholder } from "./components/AppPreviewCarouselPlaceholder";
import { SquadUpCarousel } from "./components/SquadUpCarousel";
import { SquadFeatures } from "./components/SquadFeatures";
import {
  CaseStudySection,
  EngagementSection,
  LeaguesSection,
} from "./components/SponsorshipsComponents";
import { FantasyFeatures } from "./components/FantasyFeatures";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";
import SponsorshipsToggle from "./components/SponsorshipsToggle";
import { AppFeaturesCarousel } from "./components/AppFeaturesCarousel";
import SponsorshipInclude from "./components/SponsorshipsInclude";
import { Footer } from "./components/footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Support from "./components/Support";
function Home() {
  return (
    <main className="flex-1 w-full py-8 px-2 sm:px-0">
      <h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
             bg-[linear-gradient(90deg,_#80FFEA,_#B59BF0,_#FF7EB3,_#80FFEA)] 
             bg-[length:300%_300%] animate-gradient-x text-center"
      >
        Squad Up. Compete. Win.
      </h1>
      <div className="font-sans text-lg xs:text-xl sm:text-2xl italic text-center mt-2">
        A new era of fantasy football starts here
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex flex-row gap-2 sm:gap-4">
          <a
            href="https://apps.apple.com/us/app/huddle-fantasy-sports/id6476977529"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-3 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 text-white hover:brightness-110 shadow-md rounded-md hover:bg-[#6e4eb6] transition-all duration-200 min-w-[120px]">
              Download the app
            </button>
          </a>
          <Link
            to="/fantasy-leagues"
            className="px-3 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 text-white hover:brightness-110 shadow-md rounded-md hover:bg-[#6e4eb6] transition-all duration-200 min-w-[120px] text-center flex items-center justify-center"
          >
            Explore Leagues
          </Link>
        </div>
      </div>

      <UniversityCarousel />

      <hr
        className="
          relative left-1/2 transform -translate-x-1/2 
          w-full sm:w-screen border-t border-gray-200 opacity-50 my-8
        "
      />

      <AppFeaturesCarousel />

      <div className="my-6 flex justify-center">
        <Link to="/squad-based-management">
          <span className="inline-block px-3 py-1.5 text-sm font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 text-white rounded-md hover:brightness-110 shadow-md transition-all duration-200 hover:bg-[#6e4eb6] text-center cursor-pointer">
            Learn More about Squad-Based Management
          </span>
        </Link>
      </div>
    </main>
  );
}

function SquadBasedManagement() {
  return (
    <main className="flex-1 flex flex-col items-center text-center max-w-3xl mx-auto px-2 sm:px-4 py-8 space-y-5">
      <div>
        <section className="py-10 sm:py-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center">
            Fantasy Football, Reimagined for Everyone.
          </h1>
          <p className="mt-4 text-center max-w-xl sm:max-w-2xl mx-auto text-base xs:text-lg sm:text-xl italic">
            Whether you’re a seasoned pro or a first-time player, MESH makes
            fantasy football a squad experience.
          </p>
        </section>
        {/* Divider */}
        <hr
          className="
            relative left-1/2 transform -translate-x-1/2 
            w-full sm:w-screen border-t border-gray-200 opacity-50
          "
        />

        {/* 2️⃣ Quote */}
        <section className="py-8 sm:py-15">
          <blockquote className="text-center italic max-w-xl sm:max-w-3xl mx-auto text-base xs:text-lg sm:text-xl">
            “Forget going solo – MESH transforms fantasy football into a shared
            mission. Compete together. Win together. Grow together.”
          </blockquote>
        </section>

        {/* Divider */}
        <hr
          className="
            relative left-1/2 transform -translate-x-1/2 
            w-full sm:w-screen border-t border-gray-200 opacity-50 my-8 sm:my-10
          "
        />

        <div className="w-full">
          <SquadFeatures />
        </div>
        <hr className="relative left-1/2 transform -translate-x-1/2 w-full sm:w-screen border-t border-gray-200 opacity-50 my-8 sm:my-10" />

        <section className="py-10 sm:py-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center">
            Ready to Squad Up?
          </h1>
          <p className="mt-4 text-center max-w-xl sm:max-w-2xl mx-auto text-base xs:text-lg sm:text-xl">
            Connect with a league rep to bring MESH to your fantasy league.
          </p>
        </section>
      </div>
    </main>
  );
}

function FantasyLeagues() {
  return (
    <main className="flex-1 flex flex-col items-center text-center max-w-3xl mx-auto px-2 sm:px-4 py-8 space-y-5">
      <div>
        <section className="py-10 sm:py-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center">
            Everyone Has a Squad. Now It’s Time to Compete.
          </h1>
          <p className="mt-4 text-center max-w-xl sm:max-w-2xl mx-auto text-base xs:text-lg sm:text-xl italic">
            Find your community, battle for bragging rights, and play for a
            national audience. Whether you’re part of Greek life, a bar crowd,
            an online community, or a company — there’s a league for you.
          </p>
        </section>
        {/* Divider */}
        <hr
          className="
            relative left-1/2 transform -translate-x-1/2 
            w-full sm:w-screen border-t border-gray-200 opacity-50
          "
        />

        {/* Divider */}

        <FantasyFeatures />
        <hr className="relative left-1/2 transform -translate-x-1/2 w-full sm:w-screen border-t border-gray-200 opacity-50 my-10" />
      </div>
    </main>
  );
}

function Testimonials() {
  return (
    <main className="flex-1 flex flex-col items-center text-center max-w-3xl mx-auto px-4 py-8 space-y-5">
      <h1 className="text-4xl font-bold">
        Don’t Take Our Word for It—Hear It From the Squads.
      </h1>
      <p className="text-1xl italic">
        MESH is changing the game for fantasy sports. Here’s what players have
        to say.
      </p>
      <MeshVideo />
      <TestimonialCarousel />

      <ContactUsButton />
    </main>
  );
}

function Sponsors() {
  return (
    <main className="flex-1 flex flex-col items-center text-center max-w-3xl mx-auto px-2 sm:px-4 py-8 space-y-5">
      <div>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold">
          Sponsorships That Go Beyond Ads — Be Part of the Experience.
        </h1>
        <p className="text-base xs:text-lg sm:text-xl italic mt-2">
          MESH leagues create real engagement, deep brand affinity, and 17 weeks
          of authentic exposure.
        </p>
        <hr className="relative left-1/2 transform -translate-x-1/2 w-full sm:w-screen border-t border-gray-200 opacity-50 my-10" />
        <SponsorshipInclude />
        <SponsorshipsToggle />
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Meet our Founders */}
        <section>
          <h2 className="text-3xl font-bold text-center">Meet our Founders</h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 ">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image</span>
                </div>
                <p className="mt-2 text-center text-sm uppercase">BIO</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community and Mission */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">
            Community and Mission
          </h2>
          <p className="mt-4 text-center text-sm max-w-prose mx-auto ">
            Description
          </p>
        </section>

        {/* Contact Us Form Placeholder */}
        <ContactForm></ContactForm>
      </div>
    </main>
  );
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/squad-based-management"
            element={<SquadBasedManagement />}
          />
          <Route path="/fantasy-leagues" element={<FantasyLeagues />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/sponsors" element={<Sponsors />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
