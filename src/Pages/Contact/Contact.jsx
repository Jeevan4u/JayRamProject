import React from "react";
import Banner from "../../components/Banner/Banner";
import contactIMg from "../../components/Header/images/Sabian.jpg";
import img1 from "../../Assets/Contact.jpg";
const Contact = () => {
  const contactBanner = {
    img: img1,
    title: "Home > Contact",
  };
  return (
    <div>
      <Banner bannerData={contactBanner} />
    </div>
  );
};

export default Contact;
