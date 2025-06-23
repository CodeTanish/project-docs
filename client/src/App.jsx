import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./layout/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearnPage from "./layout/LearnPage";
import TopicPage from "./layout/TopicPage";
function App() {
  return (
    <>
      <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/:topic" element={<TopicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
