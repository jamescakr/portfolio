import ExploreX from "../assets/ExploreX-demo.gif";
import ExploreXImg from "../assets/ExploreX-image.png";
import Movify from "../assets/Movify-demo.gif";
import MovifyImg from "../assets/Movify-image.png";
import lululime from "../assets/lululime-demo.gif";
import lululimeImg from "../assets/lululime-image.png";

export const projects = [
  {
    img: MovifyImg,
    video: Movify,
    demo: "https://james-movify.netlify.app/",
    github: "https://github.com/jamescakr/movify-tailwind-vite",
    title: "MOViFY",
    description: [
      "A movie web app built with React and Tailwind CSS, featuring video trailers, infinite scroll, and genre-based filtering to deliver a dynamic and immersive experience. While the design was inspired by Netflix,",
      "I built everything from scratch, focusing heavily on clean code, component reusability, and thoughtful UI structure.",
      "Special attention was given to creating an engaging interface through motion and video playback, rather than relying on static visuals.",
    ],
    skills: ["React", "React Router", "Tailwind CSS", "Postman", "Netlify"],
    api: ["TMDB API"],
  },
  {
    img: ExploreXImg,
    video: ExploreX,
    demo: "https://explorex-9.netlify.app/",
    github: "https://github.com/ExploreX-App/ExploreX?tab=readme-ov-file",
    title: "ExploreX",
    description: [
      "A hotel and activity booking platform built during a one-week team competition. I led the team as Scrum Master, managing workflow and coordinating via GitHub Projects and Slack.",
      "Our team placed 3rd out of 10 teams, and the project was featured in a YouTube video by a Korean developer & coding instructor. This success was especially meaningful because I applied lessons from my first team project,",
      "Want Some Coffee, where we overlooked deployment planning due to an overly ambitious scope within a tight one-week deadline, resulting in a rushed and failed deployment.",
    ],
    skills: [
      "React",
      "React Query",
      "React Router",
      "Bootstrap",
      "CSS",
      "Postman",
      "Netlify",
    ],
    api: ["Google Maps API", "Amadeus API", "Booking.com API", "Stripe API"],
    link: "https://www.youtube.com/watch?v=BMPvdcDjtOI&t=24m50s",
  },
  {
    img: lululimeImg,
    video: lululime,
    demo: "https://james-lululime.netlify.app/",
    github: "https://github.com/jamescakr/lululime",
    title: "Lululime",
    description:
      "A mock e-commerce layout built with React and Tailwind CSS. Focused on creating a responsive, clean UI with category filtering and dynamic product listing using mock data. Emphasized practicing component-based structure and styling. ",
    skills: ["React", "Tailwind CSS", "Netlify"],
    api: ["Mock Data"],
  },
];
