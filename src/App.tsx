"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

// New placeholder pages for navigation
import AboutMVT from "./pages/AboutMVT";
import ResidentsLogin from "./pages/ResidentsLogin";
import ResidentDocuments from "./pages/ResidentDocuments";
import ServiceRequests from "./pages/ServiceRequests";
import Announcements from "./pages/Announcements";
import Governance from "./pages/Governance";
import EventsAndSurveys from "./pages/EventsAndSurveys";
import ForSaleOrLease from "./pages/ForSaleOrLease";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* New Navigation Routes */}
          <Route path="/about-mvt" element={<AboutMVT />} />
          <Route path="/about-mvt/location-access" element={<AboutMVT />} /> {/* Sub-route example */}
          <Route path="/about-mvt/amenities" element={<Amenities />} /> {/* Reusing existing Amenities page */}
          <Route path="/about-mvt/gallery" element={<AboutMVT />} /> {/* Sub-route example */}

          <Route path="/residents/login" element={<ResidentsLogin />} />
          <Route path="/residents/documents" element={<ResidentDocuments />} />
          <Route path="/residents/service-requests" element={<ServiceRequests />} />
          <Route path="/residents/announcements" element={<Announcements />} />

          <Route path="/governance" element={<Governance />} />
          <Route path="/governance/board-members" element={<Governance />} /> {/* Sub-route example */}
          <Route path="/governance/bylaws" element={<ResidentDocuments />} /> {/* Reusing documents page for bylaws */}
          <Route path="/governance/agm-archive" element={<Governance />} /> {/* Sub-route example */}

          <Route path="/events-surveys" element={<EventsAndSurveys />} /> {/* New page for events and surveys */}
          <Route path="/for-sale-lease" element={<ForSaleOrLease />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;