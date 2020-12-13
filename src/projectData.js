//Import Images
import waveProject from "./images/music_app_project.png";
import roomProject from "./images/project_1.png";
import captureProject from "./images/projectCapture.png";
import phoneProject from "./images/projectPhone.png";
import fleuristeProject from "./images/projectFleuriste.png";
import photonProject from "./images/projectPhoton.png";

export const projectData = () => {
  return [
    {
      title: "Wave",
      img: waveProject,
      github_url: "https://github.com/RayaneBengaoui/Music-player",
      livesite_url: "https://rayanebengaoui.github.io/Music-player/",
      description:
        "Wave is a music application made with React. It introduced me to React props and how to pass them through each component. Thus I get to understand the power of Redux when the application starts to get bigger and the props management can become a bit confusing. Moreover, I discovered my first hooks with useState to access/modify local states, useEffect to add some behavior on component mounting or even on state changes and useRef to modify an object like we would normally access it in JS with QuerySelector. Finally, I've learned a lot on audio components and their prebuilt functions to play/pause a song, get the length of the song and so on.",
      color: "#11595A",
    },
    {
      title: "Room Homepage",
      img: roomProject,
      github_url:
        "https://github.com/RayaneBengaoui/FM_challenge10_room_homepage",
      livesite_url:
        "https://rayanebengaoui.github.io/FM_challenge10_room_homepage/",
      description:
        "This one page was part of a challenge from Frontend Mentor website where the goal was to implement a design into real HTML/CSS/JS. This challenge allowed me to use CSS Grid and Flexbox to make sure that the website scale up and down perfectly to give a great user experience on any device.",
      color: "#D1BC9F",
    },
    {
      title: "Capture",
      img: captureProject,
      github_url: "https://github.com/RayaneBengaoui/Capture_website",
      livesite_url: "https://rayanebengaoui.github.io/Capture_website/",
      description:
        "Capture is a website built with React. I discovered how to use React Router to link my different pages within a Single Page Application. Also, to animate the website I used Framer-motion for handling animations which is very convenient associated with the useLocation Hook to detect wether we enter or exit a component. Lastly, rather than using SASS I used Styled-Components which allows to directly write CSS inside JS files and thus reduces the amount of files the project contains.",
      color: "#23D997",
    },
    {
      title: "CSS Phone",
      img: phoneProject,
      github_url:
        "https://github.com/RayaneBengaoui/FM_challenge7_chat_app_illustration",
      livesite_url:
        "https://rayanebengaoui.github.io/FM_challenge7_chat_app_illustration/",
      description:
        "Challenge where the goal was to realize the phone illustration using only CSS. So a specific attention to details was required.",
      color: "#8A38FF",
    },
    {
      title: "Florist Website",
      img: fleuristeProject,
      github_url: "https://github.com/RayaneBengaoui/FloristPage",
      livesite_url: "https://site-fleuriste.netlify.app/",
      description:
        "Basic HTML/CSS Website split into different sections. I learned how to animate SVG images to add some depth to the design.",
      color: "#7C914A",
    },
    {
      title: "Photon",
      img: photonProject,
      github_url: "https://github.com/RayaneBengaoui/Photon",
      livesite_url: "https://rayanebengaoui.github.io/Photon/",
      description:
        "Photon is a project using the API from Pexels, a website that proposes copyright free images from worldwide creators. Thus I learned how to make requests, reading an API documentation and use async/await to make asynchronous calls.",
      color: "#915003",
    },
  ];
};
