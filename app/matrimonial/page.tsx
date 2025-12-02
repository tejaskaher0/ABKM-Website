import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatrimonialHero from '@/components/MatrimonialHero';
import FeatureCardsSection from '@/components/FeatureCardsSection';
import StatsSection from '@/components/StatsSection';
import ImageGallery from '@/components/ImageGallery';

export default function MatrimonialPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        <MatrimonialHero />
        
        <FeatureCardsSection />
        
        <StatsSection />
        
        <ImageGallery />
        
        <section className="w-full bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why We Do What We Do
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that everyone deserves to find love and companionship. Our mission is to provide a safe, secure, and easy-to-use platform that brings people together. With years of experience and thousands of success stories, we are committed to helping you find your perfect match. Join us today and start your journey towards a lifetime of happiness.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
