import "./App.css";

import { MenuBar } from "@/components/menubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Home() {
  return (
    <main className="flex-1 container py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg">
        This is a modern website with a responsive menu bar.
      </p>
    </main>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Services() {
  return <h1>Services Page</h1>;
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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
