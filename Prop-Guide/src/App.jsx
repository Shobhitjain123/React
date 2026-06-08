import "./App.css";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggeler from "./components/ThemeToggeler";
import { ThemeProvider } from "./components/ThemeToggeler";
function Navigation() {
  const isDark = true;
  const sections = [
    { id: "basic", label: "Basic Props", icon: "🔧" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🔍" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "theme", label: "Theme Toggeler", icon: "🌓" },
  ];

  return (
    <nav
      className={`sticky top-0 z-5- shadow-md transition-colors ${isDark ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-lg font-medium transition-all  bg-blue-600 text-white mx-2 my-2 hover:bg-blue-700`}
            >
              <span className="mr-2">{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className="min-h-screen bg-gray-800 ">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
          <div
            className={`mt-4 inline-block px-6 py-2 rounded-full ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <span className="font-semibold">
              Built with Bun + Vite + React + Tailwind CSS
            </span>
          </div>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="children" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="complex" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="ref" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="theme" className="scroll-mt-200">
            <ThemeToggeler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using NPM, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
