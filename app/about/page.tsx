import type { Metadata } from 'next';
import AboutContent from '../components/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dr. Samson Olori—Abuja-based consultant pediatric surgeon and medical doctor in Abuja, author, pastor and consultant. One of the best doctors and surgeons in Nigeria.',
};

export default function AboutPage() {
  return <AboutContent />;
}

