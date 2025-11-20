'use client';

import { useEffect } from 'react';

/**
 * @example
 * window.location.href     // "https://example.com/projects?page=1#project-2"
 * window.location.pathname // "/projects"
 * window.location.search   // "?page=1"
 * window.location.hash     // "#project-2"  👈
 */
export default function ScrollToHash() {
  useEffect(() => {
    // 해시 변경 감지
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // 초기 로드
    handleHashChange();

    // 해시 변경 이벤트 리스너
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}
