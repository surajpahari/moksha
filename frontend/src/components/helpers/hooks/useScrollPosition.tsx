
import { useEffect } from "react";

const scrollPositions: { [key: string]: number } = {};
const useScrollPosition = (page: string) => {
  useEffect(() => {
    const pageScrollPosition = scrollPositions[page];

    if (pageScrollPosition) {
      setTimeout(() => {
        window.scrollTo({
          top: pageScrollPosition,
          left: 0,
          behavior: 'instant'
        });
      }, 50);
    }
    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    window.addEventListener('scroll', save);
    return () => {
      window.removeEventListener('scroll', save);
    };
  }, [page]);
};

export default useScrollPosition;

