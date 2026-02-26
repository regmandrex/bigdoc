import type { Metadata } from 'next';
import BookShop from '../components/BookShop';

export const metadata: Metadata = {
  title: 'Buy Now',
  description: 'Book shop – Faith For Prosperity and Inherit A Blessing by Dr. Samson Olori.',
};

export default function BuyNowPage() {
  return <BookShop />;
}

