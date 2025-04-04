import "./App.css";

import { MenuBar } from "@/components/menubar";
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
  return <h1>Testimonials Page</h1>;
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
