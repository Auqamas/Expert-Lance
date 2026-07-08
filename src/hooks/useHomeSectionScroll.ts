import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/navigation';

export function useHomeSectionScroll() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (!state?.scrollTo) return;

    const timer = window.setTimeout(() => {
      scrollToSection(state.scrollTo!);
      window.history.replaceState({}, document.title);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location]);
}
