// import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
// import MainApp from "./pages/mainApp";

// import Onboarding from "./pages/onBoarding";
// import Dashboard from "./pages/dashboard";
// import Sidebar from "./pages/projectOverview";

import diamond from "./assets/icons/diamond.png";
import Navigation from "./components/Layout/Navbar";

// import ExploreProjecs from "./pages/exporeProject";
// import Contributor from "./pages/contributors";
// import Profile from "./pages/Proflle";

// import Profile from "./pages/proflle";

/**
 * App component renders the main application layout.
 *
 * It includes the Navbar, Routes for landing page and main app, and the Footer.
 *
 * The container element has a dark gradient background and is set to at least
 * the height of the viewport.
 *
 * @returns {JSX.Element} The App component JSX
 */

function App() {

  
  return (
    <div className="min-h-screen bg-dark-gradient text-white relative overflow-hidden flex flex-col justify-between">
      <Navigation/>
      <Routes>

          <Route index element={<LandingPage />} />

        {/* <Route element={<MainApp/>} path="/app" /> */}
      </Routes>

      <div className="container mx-auto relative">
        <div className="fixed top-10 left-20 -z-10 hidden md:block">
          <img
            src={diamond}
            alt="Decorative diamond blur"
            className="rotate-45 w-56 blur-lg animate-float-slow"
          />
        </div>
        <div className="fixed bottom-10 right-20 -z-10 hidden md:block animate-float-slow">
          <img
            src={diamond}
            alt="Decorative diamond "
            className="w-56 blur-lg"
          />
        </div>
      </div>
         <div className="container mx-auto relative">

         <div className="fixed top-10 left-20 -z-10 hidden md:block">
        <img src={diamond} alt="Decorative diamond blur" className="rotate-45 w-56 blur-lg animate-float-slow" />
      </div>
      <div className="fixed bottom-10 right-20 -z-10 hidden md:block animate-float-slow">
        <img src={diamond} alt="Decorative diamond " className="w-56 blur-lg" />
      </div>
         </div>
    </div>
  );
}

export default App;
