import { useEffect, useState } from 'react';
/**
 * Custom hook that tracks the state of a media query using the [`Match Media API`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).
 * @param {string} query - The media query to track.
 * @param {?UseMediaQueryOptions} [options] - The options for customizing the behavior of the hook (optional).
 * @returns {boolean} The current state of the media query (true if the query matches, false otherwise).
 * @public
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-media-query)
 * @example
 * ```tsx
 * const isSmallScreen = useMediaQuery('(max-width: 600px)');
 * // Use `isSmallScreen` to conditionally apply styles or logic based on the screen size.
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
