import type { MouseEvent } from 'react';
import type { NavigateFunction } from 'react-router-dom';

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function handleSectionNavigation(
  e: MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  pathname: string,
  navigate: NavigateFunction
) {
  e.preventDefault();

  if (pathname === '/') {
    scrollToSection(sectionId);
    return;
  }

  navigate('/', { state: { scrollTo: sectionId } });
}
