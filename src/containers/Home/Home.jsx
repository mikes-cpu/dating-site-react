import React from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import SectionLayout_1 from "../../components/SectionLayout_1";
import SectionLayout_2 from "../../components/SectionLayout_2/SectionLayout_2";
import Footer from "../../components/Footer";
import "./Home.scss";

import { section_1_ObjOne } from "../../components/SectionLayout_1/Data";
import { section_2_ObjOne } from "../../components/SectionLayout_2/Data";

function Home({ signIn }) {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <Navbar signIn={signIn} />
          <HeroSection signIn={signIn} />
          <SectionLayout_1 {...section_1_ObjOne} />
          <SectionLayout_2 {...section_2_ObjOne} />
          <Footer />
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
