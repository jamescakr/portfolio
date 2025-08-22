import ExploreX from "../assets/ExploreX-demo.gif";
import ExploreXImg from "../assets/ExploreX-image.png";
import Movify from "../assets/Movify-demo.gif";
import MovifyImg from "../assets/Movify-image.png";
import SubTube from "../assets/SubTube-demo.gif";
import SubTubeImg from "../assets/SubTube-image.png";

export const projects = [
  {
    img: SubTubeImg,
    video: SubTube,
    demo: "https://better-tmr.netlify.app/",
    github: "https://github.com/Better-Tmr/SubTube-fe",
    title: "SubTube",
    description: [
      {
        highlight:
          "An award-winning web app that placed 2nd out of 10 teams in a one-week hackathon, ",
      },
      "built to help Korean learners study English using YouTube videos. I led the team as Product Owner, creating the app’s design in Figma and contributing directly to the overall UI/UX design as well as the recommendation page with filtering and pagination features. The project was featured in a YouTube video by a Korean developer & coding instructor, which included my presentation. ",
    ],

    skills: [
      "React",
      "React Query",
      "Tailwind CSS",
      "Figma",
      "Sanity",
      "Postman",
      "Vercel",
    ],
    api: [
      "Youtube Data API v3",
      "Google Cloud Translation API",
      "Free Dictionary API",
    ],
    link: "https://www.youtube.com/watch?v=vzMEUJ2XpNo&t=440s",
  },
  {
    img: ExploreXImg,
    video: ExploreX,
    demo: "https://explorex-9.netlify.app/",
    github: "https://github.com/ExploreX-App/ExploreX?tab=readme-ov-file",
    title: "ExploreX",
    description: [
      {
        highlight:
          "An award-winning hotel and activity booking platform that placed 3rd out of 10 teams in a one-week hackathon. ",
      },
      "As Scrum Master, I guided the team’s workflow using Agile practices and GitHub Projects, ensuring smooth collaboration and on-time progress. Beyond team coordination, I contributed directly to the activity exploration page, building filtering and booking functionality that tested well with users. The project was later featured in a YouTube video by a Korean developer & coding instructor.",
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
    img: MovifyImg,
    video: Movify,
    demo: "https://james-movify.netlify.app/",
    github: "https://github.com/jamescakr/movify-tailwind-vite",
    title: "MOViFY",
    description: [
      "A movie web app built with React and Tailwind CSS, featuring video trailers, infinite scroll, and genre-based filtering to deliver a dynamic and immersive experience. While the design was inspired by Netflix, ",
      {
        highlight:
          "I built everything from scratch, focusing heavily on clean code, component reusability, and thoughtful UI structure.",
      },
      "Special attention was given to creating an engaging interface through motion and video playback, rather than relying on static visuals.",
    ],
    skills: ["React", "React Router", "Tailwind CSS", "Postman", "Netlify"],
    api: ["TMDB API"],
  },
];
