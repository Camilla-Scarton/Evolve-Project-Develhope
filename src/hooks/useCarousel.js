import { useState } from "react";

const useCarousel = ( items ) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const nextItem = () => {
    setCurrentItemIndex(currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1);
  };

  const prevItem = () => {
    setCurrentItemIndex(currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1);
  };

  const currentItem = items[currentItemIndex]

  return {
    nextCard: nextItem,
    prevCard: prevItem,
    currentItem: currentItem
  };
};

export default useCarousel;


