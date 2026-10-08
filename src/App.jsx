import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorFollower from "./components/CursorFollower.jsx";
import "./theme.css";

function AppRoutes({ theme, onToggleTheme }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects standalone />} />
          <Route
            path="/contact"
            element={
              <Contact standalone />
            }
          />
          <Route
            path="*"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
      <CursorFollower />
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-theme") === "light"
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works for this session when storage is unavailable.
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <AppRoutes
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
    </BrowserRouter>
  );
}
