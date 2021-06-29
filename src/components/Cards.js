import "../styles/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  const projects = [
    {
      title: "NAME BRAND",
      text: "Name Brand is a demo ecommerce store with full fledged features, such as product search and sorting, user authentication and order history. Built with Next.JS for static generation of product category and individual product pages, styled with Tailwind CSS. The products database is powered by Firebase, and Stripe for handling payments.",
      src: "img/name_brand.jpg",
      url: "https://namebrand.vercel.app",
      gitUrl: "https://github.com/liuhe2020/next-name-brand",
    },
    {
      title: "BINGEDIN MOVIE APP",
      text: "bINGEdIN is a movie app where users can view infos and watch trailers of trending movies over a variety of genres. It features a search functionality, and a watch list that stores user added movies in local storage. The app was built with React.js with styled components, utilising TMDB's APIs for movie data and YouTube for trailers.",
      src: "img/bingedin.jpg",
      url: "https://bingedin.netlify.app",
      gitUrl: "https://github.com/liuhe2020/react-bingedin",
    },
    {
      title: "YAAK CHATROOM",
      text: "Yaak chatroom is an online chat app with multi-rooms support. Users can log in with Google or Facebook and chat to one another. It also supports emojis. Yaak was built with HTML, SASS and vanilla JavaScript, utilising Firebase for data storage and user authentication.",
      src: "img/yaak.jpg",
      url: "https://yaak-aa6a6.web.app",
      gitUrl: "https://github.com/liuhe2020/yaak",
    },
    {
      title: "LIU RIVER PHOTOGRAPHY",
      text: "A photographer's website built using HTML, CSS and vanilla JavaScript with features including custom built gallery lightbox and client side form validation.",
      src: "img/liu_river_photography.jpg",
      url: "https://www.liuriver.co.uk",
      gitUrl: "https://github.com/liuhe2020/liuriver",
    },
  ];

  return (
    <div id="projects">
      <div className="project-title-container">
        <h2>PROJECTS</h2>
      </div>
      {projects.map(({ title, text, src, url, gitUrl }) => (
        <CardItem
          key={title}
          title={title}
          text={text}
          src={src}
          url={url}
          gitUrl={gitUrl}
        />
      ))}
    </div>
  );
}

export default Cards;
