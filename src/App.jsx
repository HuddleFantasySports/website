import "./App.css";
import MeshVideo from "./components/MeshVideo";
import { TestimonalCarousel } from "./components/TestimonialCarousel";
import { MenuBar } from "./components/menubar";
import { ContactUs } from "./components/ContactUsButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Home() {
  return (
    <main className="flex-1 container py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mesh Leagues</h1>
      <p className="text-lg">Test</p>
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
