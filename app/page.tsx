'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/landing/navbar';
import Hero from '../components/landing/hero';
import ROICalculator from '../components/landing/ROICalculator';
import Pricing from '../components/landing/pricing';
import ProductShowcase from '../components/landing/ProductShowcase';
import BentoGrid from '../components/landing/BentoGrid';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/footer';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; //

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ROICalculator />
        <Pricing />
        <ProductShowcase />
        <BentoGrid />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}