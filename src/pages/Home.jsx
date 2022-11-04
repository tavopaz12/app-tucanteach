import React from "react";
import SectionClass from "../containers/SectionClass";
import "../styles/Home.scss";
import Header from "../containers/Header";

function Home() {
  return (
    <>
      <div className="bg__home"></div>

      <div className="home__container">
        <Header></Header>

        <SectionClass></SectionClass>
      </div>
    </>
  );
}

export default Home;
