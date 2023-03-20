import React from "react";
import Banner from "../../components/Banner/Banner";
import TourImage from "../../components/Header/images/1675391709519.jpg";
const Tour = () => {
  const tourBanner = {
    img: TourImage,
    title: "Home > Tour",
  };
  return (
    <div className="Tour-Section">
      <Banner bannerData={tourBanner} />
    </div>
  );
};

export default Tour;
