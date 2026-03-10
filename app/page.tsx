import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PrayerTimes from '@/components/PrayerTimes';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PrayerTimes />
      <MissionSection />
      <ServicesSection />
      <ActivitiesSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
