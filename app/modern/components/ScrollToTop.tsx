'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scrolls the window to top on every route change so the new page
 * starts at the top (fixes mobile where title was partly off-screen).
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
