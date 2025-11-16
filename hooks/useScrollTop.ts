import { useCallback } from 'react';

export function useScrollTop() {
  const onScrollTop = useCallback(() => {
    const mainLayout = document.getElementById('main-layout');
    if (!mainLayout) return;

    mainLayout.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { onScrollTop };
}
