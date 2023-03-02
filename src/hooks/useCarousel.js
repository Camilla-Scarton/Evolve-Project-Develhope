import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useCarousel = ( items ) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const location = useLocation();


  const nextItem = () => {
    setCurrentItemIndex(currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1);
  };

  const prevItem = () => {
    setCurrentItemIndex(currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1);
  };

  const currentItem = items[currentItemIndex]

  useEffect(() => {
    setCurrentItemIndex(0)
  }, [location])

  return {
    nextCard: nextItem,
    prevCard: prevItem,
    currentItem: currentItem,
    currentItemIndex: currentItemIndex
  };
};

export default useCarousel;


