import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ImageCtaSection from '@/components/ImageCtaSection';
import ServicesSection from '@/components/ServicesSection';
import InfoCardsSection from '@/components/InfoCardsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        <HeroSlider />
        
        <AboutSection />
        
        <ImageCtaSection
          imageSrc="/banner1.jpg"
          title="Start Your Journey"
          description="Thousands of happy couples have found each other here. You could be next."
          buttons={[
            { text: 'Explore', href: '#explore' },
            { text: 'Create Profile', href: '#register' },
          ]}
        />
        
        <ServicesSection />
        
        <ImageCtaSection
          imageSrc="/banner2.jpg"
          title="Become a Member"
          description="Unlock exclusive features and connect with verified profiles today."
          buttons={[
            { text: 'Become Member', href: '#membership' },
          ]}
        />

        <AboutSection
          title="Our Success Stories"
          description="Nothing brings us more joy than seeing our members find their happily ever after. Read inspiring stories of couples who met on SoulConnect and started their beautiful journey together."
          features={[
            'Thousands of success stories',
            'Weddings across different cultures',
            'Growing community of happy couples',
          ]}
          reverse={true}
        />
        
        <InfoCardsSection />
      </main>

      <Footer />
    </div>
  );
}
