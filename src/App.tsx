// import React from 'react';
import { AuthProvider } from './components/AuthContext';
import { SolanaWalletProvider } from './components/WalletProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import TokenizedLogistics from './components/TokenizedLogistics';
import Features from './components/Features';
import BrandCommunities from './components/BrandCommunities';
import CheckoutFlow from './components/CheckoutFlow';
import FuturePlatform from './components/FuturePlatform';
import LetsWork from './components/LetsWork';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <SolanaWalletProvider>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          {/* Header */}
          <Header />
          
          {/* Main content */}
          <main>
            {/* Hero section */}
            <Hero />
            
            {/* Tokenized Logistics section */}
            <TokenizedLogistics />
            
            {/* Features section */}
            <Features />
            
            {/* Brand Communities section */}
            <BrandCommunities />
            
            {/* Checkout Flow section */}
            <CheckoutFlow />
            
            {/* Future Platform section */}
            <FuturePlatform />
            
            {/* Let's Work section */}
            <LetsWork />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </SolanaWalletProvider>
    </AuthProvider>
  );
}

export default App;
