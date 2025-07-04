import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Leader from "./components/Leader";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  // If you need to actually load resources before showing content
  useEffect(() => {
    // You can add any resource loading logic here
    // For now, we'll just simulate loading with the progress in LoadingScreen
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.style.overflow = "auto"; // Enable scrolling once loaded
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  // Check if current path is admin route
  const isAdminRoute = (pathname) => {
    return pathname.startsWith("/admin");
  };

  // Get current location
  const pathname = window.location.pathname;

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="relative min-h-screen">
          {loading && (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          )}

          <div style={{ visibility: loading ? "hidden" : "visible" }}>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={<Navigate to="/admin/login" replace />}
              />

              {/* Main Website */}
              <Route
                path="*"
                element={
                  <>
                    <Header />
                    <main>
                      <Hero />
                      <WhyChoose />
                      <About />
                      <Services />
                      <MissionVision />
                      <Leader />
                      <Industries />
                      <FAQ />
                      <Contact />
                      <CTASection />
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
