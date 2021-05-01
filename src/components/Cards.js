import "../styles/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div id="projects">
      <div className="project-title-container">
        <h2>PROJECTS</h2>
      </div>
      <CardItem
        title="YAAK CHATROOM"
        text="Yaak chatroom is an online chat app with multi-rooms support. Users can log in with Google or Facebook and chat to one another. It also supports emojis. Yaak was built with HTML, SASS and vanilla JavaScript, utilising Firebase for data storage and user authentication."
        src="img/yaak.jpg"
        url="https://yaak-aa6a6.web.app/"
        gitUrl="https://github.com/liuhe2020/yaak"
      />
      <CardItem
        title="LIU RIVER PHOTOGRAPHY"
        text="A photographer's website built using HTML, CSS and vanilla JavaScript with features including custom built gallery lightbox and client side form validation."
        src="img/liu_river_photography.jpg"
        url="https://www.liuriver.co.uk"
        gitUrl="https://github.com/liuhe2020/liuriver"
      />
    </div>
  );
}

export default Cards;
