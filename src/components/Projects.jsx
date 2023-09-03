import '../styles/Projects.css';
import Project from './Project';
import { nsds, pinMyMap, bingedIn, liuRiverPhotography, yaak, nameBrand } from '../assets/images';

const projects = [
  {
    title: 'NEXT SANITY DEMO STORE',
    text: 'Next Sanity Demo Store is an example ecommerce store website built on Next.js 13 with the app router. Pages and components are server side rendered wherever possible. It is coupled with Sanity headless CMS to handle all the data. Paypal integration for payments with server side verification for orders and payments in Next API routes.',
    src: nsds,
    url: 'https://nsds.vercel.app',
    gitUrl: 'https://github.com/liuhe2020/next-sanity-demo-store',
  },
  {
    title: 'PIN MY MAP',
    text: 'Pin My Map offers users the ability to record places they have visited using the Mapbox API. Users can pin locations on a world map, add notes and photos, as well as sharing their personalised map page on social networks. It is built using Next.JS 13, tailwind CSS, Server Actions, NextAuth, PostgresSQL and Prisma ORM.',
    src: pinMyMap,
    url: 'https://pinmymap.vercel.app',
    gitUrl: 'https://github.com/liuhe2020/pin-my-map-v2',
  },
  {
    title: 'NAME BRAND',
    text: 'Name Brand is a demo ecommerce store with full fledged features, such as searching and sorting products, user authentication and order history. Built with Next.JS for static generation of product category and individual product pages, styled with Tailwind CSS. State management with Redux toolkit. The products database is powered by Firebase, and Stripe for handling payments.',
    src: nameBrand,
    url: 'https://namebrand.vercel.app',
    gitUrl: 'https://github.com/liuhe2020/next-name-brand',
  },
  {
    title: 'BINGEDIN MOVIES',
    text: "bINGEdIN is a movie website where users can view infos and watch trailers of trending movies over a variety of genres. It features a search functionality, and a watch list that stores user added movies in local storage. The website was built with React.js with Styled Components, utilising TMDB's APIs for movie data and YouTube for the trailers.",
    src: bingedIn,
    url: 'https://bingedin.netlify.app',
    gitUrl: 'https://github.com/liuhe2020/react-bingedin',
  },
  {
    title: 'YAAK CHATROOM',
    text: 'Yaak chatroom is an online chat app with multi-rooms support. Users can log in with Google or Facebook and chat to one another. It also supports emojis. Yaak was built with HTML, SASS and vanilla JavaScript, utilising Firebase for data storage and user authentication.',
    src: yaak,
    url: 'https://yaak-aa6a6.web.app',
    gitUrl: 'https://github.com/liuhe2020/yaak',
  },
  {
    title: 'LIU RIVER PHOTOGRAPHY',
    text: "A photographer's website built using HTML, CSS and vanilla JavaScript with features including custom built gallery lightbox and client side form validation.",
    src: liuRiverPhotography,
    url: 'https://www.liuriver.co.uk',
    gitUrl: 'https://github.com/liuhe2020/liuriver',
  },
];

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='project-title-container'>
        <h2>PROJECTS</h2>
      </div>
      {projects.map(({ title, text, src, url, gitUrl }) => (
        <Project key={title} title={title} text={text} src={src} url={url} gitUrl={gitUrl} />
      ))}
    </div>
  );
}
