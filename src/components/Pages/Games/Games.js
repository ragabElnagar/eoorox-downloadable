import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
import SectionTitle from "../../Utilities/SectionTitle/SectionTitle";
import gameList from "../../Utilities/data/data.json";

const Games = () => {
  const [items, setItems] = useState(gameList.data);
  const [selectedTab, setSelectedTab] = useState("All matches");

  const filterItem = (cat) => {
    setSelectedTab(cat);
    if (cat === "All matches") {
      setItems(gameList.data);
    } else {
      const filterUpdate = gameList.data.filter((currentItem) => {
        return currentItem.category === cat;
      });
      setItems(filterUpdate);
    }
  };

  function handleClick(link) {
    window.location.href = link;
  }
  
  return (
    <React.Fragment>
      <Breadcrumb pageTitle={"Game"} currentPage={"Game"} />
      <section id="work" className="pb-120">
        <div className="container">
          <div className="portfolio ">
            <div
              className="row align-items-center mb-30 wow fadeInUp animated"
              data-animation="fadeInRight"
              data-delay=".4s"
            >
              <div className="col-lg-12">
                <SectionTitle titlefirst="Trending" titleSec="Games" />
              </div>
              <div className="col-lg-12">
                <div
                  className="my-masonry wow fadeInDown animated"
                  data-animation="fadeInRight"
                  data-delay=".4s"
                >
                  <div className="button-group filter-button-group ">
                    <button
                      className={selectedTab === "All matches" && "active"}
                      onClick={() => filterItem("All matches")}
                    >
                      {"All matches"}
                    </button>
                    <button
                      className={selectedTab === "Skill-based" && "active"}
                      onClick={() => filterItem("Skill-based")}
                    >
                      {"Skill-based"}
                    </button>
                    <button
                      className={selectedTab === "Cars" && "active"}
                      onClick={() => filterItem("Cars")}
                    >
                      {"Cars"}
                    </button>
                    <button
                      className={selectedTab === "Kids" && "active"}
                      onClick={() => filterItem("Kids")}
                    >
                      {"Kids"}
                    </button>
                    <button
                      className={selectedTab === "Adventure" && "active"}
                      onClick={() => filterItem("Adventure")}
                    >
                      {"Adventure"}
                    </button>
                    <button
                      className={selectedTab === "Action" && "active"}
                      onClick={() => filterItem("Action")}
                    >
                      {"Action"}
                    </button>
                    <button
                      className={selectedTab === "Memory" && "active"}
                      onClick={() => filterItem("Memory")}
                    >
                      {"Memory"}
                    </button>
                    <button
                      className={selectedTab === "Strategy" && "active"}
                      onClick={() => filterItem("Strategy")}
                    >
                      {"Strategy"}
                    </button>
                    <button
                      className={selectedTab === "Dot games" && "active"}
                      onClick={() => filterItem("Dot games")}
                    >
                      {"Dot games"}
                    </button>
                    <button
                      className={selectedTab === "Dress Up" && "active"}
                      onClick={() => filterItem("Dress Up")}
                    >
                      {"Dress Up"}
                    </button>
                    <button
                      className={selectedTab === "Sports" && "active"}
                      onClick={() => filterItem("Sports")}
                    >
                      {"Sports"}
                    </button>
                    <button
                      className={selectedTab === "Dice" && "active"}
                      onClick={() => filterItem("Dice")}
                    >
                      {"Dice"}
                    </button>
                    <button
                      className={selectedTab === "Puzzles" && "active"}
                      onClick={() => filterItem("Puzzles")}
                    >
                      {"Puzzles"}
                    </button>
                    <button
                      className={selectedTab === "Math games" && "active"}
                      onClick={() => filterItem("Math games")}
                    >
                      {"Math games"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid col4">
              {items.map((item, index) => {
                const { logo, link, name } = item;
                return (
                  <div className="grid-item" key={index}>
                    <Link
                      to=""
                      onClick={() => handleClick(link)}
                      className="popup-image"
                    >
                      <figure className="gallery-image">
                        <img
                          width="100%"
                          src={logo}
                          alt="img"
                          className="img"
                        />
                        <figcaption>
                          <h4>{name}</h4>
                        </figcaption>
                      </figure>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Games;
