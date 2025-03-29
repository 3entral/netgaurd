import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#111c2d] text-white">
      <Helmet>
        <title>Netguard - Enterprise Security & Development Solutions</title>
        <meta name="description" content="Secure your digital presence with enterprise-grade protection. Comprehensive web security, SEO optimization, and development solutions for your business." />
        <meta name="keywords" content="web security, enterprise security, development, SEO, DDoS protection" />
        <link rel="canonical" href="https://netguard.com" />
        
        <meta property="og:title" content="Netguard - Enterprise Security & Development Solutions" />
        <meta property="og:description" content="Secure your digital presence with enterprise-grade protection. Comprehensive web security, SEO optimization, and development solutions for your business." />
        <meta property="og:url" content="https://netguard.com" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Netguard - Enterprise Security & Development Solutions" />
        <meta name="twitter:description" content="Secure your digital presence with enterprise-grade protection. Comprehensive web security, SEO optimization, and development solutions for your business." />
      </Helmet>

      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}