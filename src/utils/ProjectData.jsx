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
    title: "MOViFY",
    description: "netflix",
    skills: ["React", "React Router", "Tailwind CSS", "Postman", "Netlify"],
    api: ["TMDB API"],
  },
  {
    img: ExploreXImg,
    video: ExploreX,
    title: "ExploreX",
    description: "team project",
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
  },
  {
    img: lululimeImg,
    video: lululime,
    title: "Lululime",
    description: "lululime",
    skills: ["React", "Tailwind CSS", "Netlify"],
    api: ["Mock Data"],
  },
];
