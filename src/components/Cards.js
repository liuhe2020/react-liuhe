import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div id="projects">
      <CardItem
        title="LIU RIVER PHOTOGRAPHY"
        text="A photographer's website built with HTML, CSS and JavaScript."
        src="img/liu_river_photography.jpg"
        url="https://www.liuriver.co.uk"
        gitUrl="https://github.com/liuhe2020/liuriver"
      />
    </div>
  );
}

export default Cards;
