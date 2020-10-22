import React from "react";
import "../styles/CardItem.css";

function CardItem(props) {
  return (
    <div className="cards" id="cards">
      <div className="cards-inner">
        <div className="cards-item-container">
          <a className="cards-item-link" target="_blank" href={props.url}>
            <img
              className="cards-item-img"
              src={props.src}
              alt="Project Image"
            />
            <div className="cards-item-bottom">
              <img
                className="cards-item-arrow-right"
                src="../svg/arrow_right.png"
                alt="Arrow Icon"
              />
              <h1 className="cards-item-title">{props.title}</h1>
            </div>
          </a>
          <div className="cards-item-info">
            <a
              className="cards-item-git-link"
              target="_blank"
              href={props.gitUrl}
            >
              <h5 className="cards-item-git">GitHub</h5>
              <img
                className="cards-item-arrow-left"
                src="../svg/arrow_left.png"
                alt="Arrow Icon"
              />
            </a>
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
