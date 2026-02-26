import type { Metadata } from 'next';
import AboutContent from '../components/AboutContent';

export const metadata: Metadata = {
  title: 'ABOUT US',
  description:
    'Learn more about Dr. Samson Olori, a medical doctor, lead surgeon, author, pastor and consultant.',
};

export default function AboutPage() {
  return <AboutContent />;
}

