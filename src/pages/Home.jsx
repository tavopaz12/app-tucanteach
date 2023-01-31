import React, { useState } from "react";
import "../styles/Home.scss";
import Header from "../containers/Header";
import CardSection from "../containers/CardSection";
import PreLoaderTetris from "../components/PreLoaderTetris";
import PreLoader from "../components/PreLoader";

function Home() {
  const [hidePreloader, sethidePreloader] = useState(false);

  const getCountTimeout = () => {
    setTimeout(() => {
      sethidePreloader(true);
    }, 5000);
  };

  getCountTimeout();
  return (
    <>
      <div className="bg__home"></div>

      <div className="home__container">
        <Header></Header>

        <div className="cards__container">
          <CardSection
            image={
              "https://static.guiainfantil.com/media/3568/c/cuidar-monk-cuento-infantil-para-trabajar-el-respeto-al-medioambiente-xs.jpg"
            }
            title={"Cuidado del medio ambiente"}
            description={""}
            to={"/medio-ambiente"}
          />
          <CardSection
            image={
              "https://sites.google.com/site/pesmojicascie112/_/rsrc/1476572370901/home/ni%C3%B1os%20del%20desarollo%20humano.jpg"
            }
            title={"Desarrollo Humano"}
            description={""}
            to={"/desarrollo-humano"}
          />
          <CardSection
            image={"https://i.ytimg.com/vi/YeVZNBHNO4I/maxresdefault.jpg"}
            title={"Cero Violencia"}
            description={""}
            to={"/cero-violencia"}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
