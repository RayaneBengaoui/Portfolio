//Import Images
import waveProject from "./images/music_app_project.png";
import roomProject from "./images/project_1.png";
import captureProject from "./images/projectCapture.png";
import phoneProject from "./images/projectPhone.png";
import fleuristeProject from "./images/projectFleuriste.png";

export const projectData = () => {
  return [
    {
      title: "Wave",
      img: waveProject,
      github_url: "https://github.com/RayaneBengaoui/Music-player",
      livesite_url: "https://rayanebengaoui.github.io/Music-player/",
      description:
        "Wave is a music application made with React. It introduced me to React props and how to pass them through each component. Thus I understand the power of Redux when the application start to get bigger and the props management can become a bit confusing. Moreover, I discovered my first hooks with useState to access/modify local states, useEffect to add some behavior on component mounting or even on state changes and useRef to modify an object like we would normally access it in JS with QuerySelector. Finally, I've learned a lot on audio components and their prebuilt functions to play/pause a song, get the length of the song and so on.",
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
        "This one page was part of a challenge from Frontend Mentor website where the goal is to implement designs into real HTML/CSS/JS. This challenge allowed me to use CSS Grid and Flexbox to make sure that the website scale up and down perfectly to give a great user experience no matter the device used.",
      color: "#D1BC9F",
    },
    {
      title: "Capture",
      img: captureProject,
      github_url:
        "https://github.com/RayaneBengaoui/FM_challenge10_room_homepage",
      livesite_url:
        "https://rayanebengaoui.github.io/FM_challenge10_room_homepage/",
      description:
        "This is a website 222222 geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr",
      color: "#23D997",
    },
    {
      title: "CSS Phone",
      img: phoneProject,
      github_url:
        "https://github.com/RayaneBengaoui/FM_challenge10_room_homepage",
      livesite_url:
        "https://rayanebengaoui.github.io/FM_challenge10_room_homepage/",
      description:
        "This is a website 222222 geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr",
      color: "#8A38FF",
    },
    {
      title: "Florist Website",
      img: fleuristeProject,
      github_url:
        "https://github.com/RayaneBengaoui/FM_challenge10_room_homepage",
      livesite_url:
        "https://rayanebengaoui.github.io/FM_challenge10_room_homepage/",
      description:
        "This is a website 222222 geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr This is a website geronreogre fezrezferferferrr",
      color: "#7C914A",
    },
  ];
};
